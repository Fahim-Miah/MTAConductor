import { useState, useEffect, useCallback, useRef } from 'react';
import { QUESTIONS, SHARED_PASSAGES, GRAPHICS, CATEGORIES, Question } from './data/questions';

type Tab = 'home' | 'quiz' | 'review' | 'notes' | 'stats';

interface QuizState {
  questions: Question[];
  currentIndex: number;
  answers: Record<number, { selected: number; correct: boolean }>;
  selectedChoice: number | null;
  submitted: boolean;
  startTime: number;
  config: { category: string; count: number };
}

interface Note {
  questionId: number;
  text: string;
  timestamp: number;
  category: string;
}

interface Stats {
  totalAttempts: number;
  correctAnswers: number;
  currentStreak: number;
  bestStreak: number;
  categoryStats: Record<string, { attempts: number; correct: number }>;
  sessions: { date: string; score: number; total: number; accuracy: number }[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [notes, setNotes] = useState<Record<number, Note>>({});
  const [stats, setStats] = useState<Stats>({
    totalAttempts: 0, correctAnswers: 0, currentStreak: 0, bestStreak: 0,
    categoryStats: {}, sessions: []
  });
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const [noteEditorQId, setNoteEditorQId] = useState<number | null>(null);
  const [showCustomQuiz, setShowCustomQuiz] = useState(false);
  const [customQuizCats, setCustomQuizCats] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<string>('All');
  const [notesSearch, setNotesSearch] = useState('');
  const [notesFilter, setNotesFilter] = useState<string>('All');
  const quizContainerRef = useRef<HTMLDivElement>(null);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem('mta_notes');
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    const savedStats = localStorage.getItem('mta_stats');
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  // Save to localStorage
  useEffect(() => { localStorage.setItem('mta_notes', JSON.stringify(notes)); }, [notes]);
  useEffect(() => { localStorage.setItem('mta_stats', JSON.stringify(stats)); }, [stats]);

  const getCategoryCount = (cat: string) => QUESTIONS.filter(q => q.category === cat).length;

  const getCategoryStats = (cat: string) => {
    const catQuestions = QUESTIONS.filter(q => q.category === cat);
    const attempted = catQuestions.filter(q => stats.categoryStats[cat]?.attempts);
    const correct = catQuestions.filter(q => stats.categoryStats[cat]?.correct);
    return { total: catQuestions.length, attempted: attempted.length, correct: correct.length };
  };

  const startQuiz = useCallback((category: string, count: number) => {
    let filtered: Question[];
    if (category === 'mixed') {
      filtered = shuffleArray(QUESTIONS);
      if (count > 0) filtered = filtered.slice(0, count);
    } else {
      filtered = shuffleArray(QUESTIONS.filter(q => q.category === category));
    }
    setQuiz({
      questions: filtered,
      currentIndex: 0,
      answers: {},
      selectedChoice: null,
      submitted: false,
      startTime: Date.now(),
      config: { category, count }
    });
    setActiveTab('quiz');
  }, []);

  const startCustomQuiz = () => {
    const filtered = shuffleArray(QUESTIONS.filter(q => customQuizCats.includes(q.category)));
    if (filtered.length === 0) return;
    setQuiz({
      questions: filtered,
      currentIndex: 0,
      answers: {},
      selectedChoice: null,
      submitted: false,
      startTime: Date.now(),
      config: { category: customQuizCats.join(', '), count: filtered.length }
    });
    setShowCustomQuiz(false);
    setActiveTab('quiz');
  };

  const submitAnswer = () => {
    if (!quiz || quiz.selectedChoice === null) return;
    const currentQ = quiz.questions[quiz.currentIndex];
    const isCorrect = quiz.selectedChoice === currentQ.correct;

    const newAnswers = { ...quiz.answers, [currentQ.id]: { selected: quiz.selectedChoice, correct: isCorrect } };

    // Update stats
    const newStats = { ...stats };
    newStats.totalAttempts++;
    if (isCorrect) {
      newStats.correctAnswers++;
      newStats.currentStreak++;
      if (newStats.currentStreak > newStats.bestStreak) newStats.bestStreak = newStats.currentStreak;
    } else {
      newStats.currentStreak = 0;
    }
    if (!newStats.categoryStats[currentQ.category]) {
      newStats.categoryStats[currentQ.category] = { attempts: 0, correct: 0 };
    }
    newStats.categoryStats[currentQ.category].attempts++;
    if (isCorrect) newStats.categoryStats[currentQ.category].correct++;

    setStats(newStats);
    setQuiz({ ...quiz, answers: newAnswers, submitted: true });
  };

  const nextQuestion = () => {
    if (!quiz) return;
    if (quiz.currentIndex < quiz.questions.length - 1) {
      setQuiz({ ...quiz, currentIndex: quiz.currentIndex + 1, selectedChoice: null, submitted: false });
    }
  };

  const prevQuestion = () => {
    if (!quiz) return;
    if (quiz.currentIndex > 0) {
      const prevIdx = quiz.currentIndex - 1;
      const prevQ = quiz.questions[prevIdx];
      const prevAnswer = quiz.answers[prevQ.id];
      setQuiz({
        ...quiz,
        currentIndex: prevIdx,
        selectedChoice: prevAnswer ? prevAnswer.selected : null,
        submitted: !!prevAnswer
      });
    }
  };

  const jumpToQuestion = (idx: number) => {
    if (!quiz || idx < 0 || idx >= quiz.questions.length) return;
    const q = quiz.questions[idx];
    const answer = quiz.answers[q.id];
    setQuiz({
      ...quiz,
      currentIndex: idx,
      selectedChoice: answer ? answer.selected : null,
      submitted: !!answer
    });
  };

  const finishQuiz = () => {
    if (!quiz) return;
    const correct = Object.values(quiz.answers).filter(a => a.correct).length;
    const total = quiz.questions.length;
    const elapsed = Math.floor((Date.now() - quiz.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;

    const newStats = { ...stats };
    newStats.sessions = [{
      date: new Date().toLocaleDateString(),
      score: correct,
      total,
      accuracy: Math.round((correct / total) * 100)
    }, ...newStats.sessions].slice(0, 10);
    setStats(newStats);
    setShowResults(true);
  };

  const exitQuiz = () => {
    setQuiz(null);
    setActiveTab('home');
  };

  const openNoteEditor = (qId: number) => {
    setNoteEditorQId(qId);
    setShowNoteEditor(true);
  };

  const saveNote = (text: string) => {
    if (noteEditorQId === null) return;
    const q = QUESTIONS.find(q => q.id === noteEditorQId);
    if (!text.trim()) {
      const newNotes = { ...notes };
      delete newNotes[noteEditorQId];
      setNotes(newNotes);
    } else {
      setNotes({
        ...notes,
        [noteEditorQId]: { questionId: noteEditorQId, text, timestamp: Date.now(), category: q?.category || '' }
      });
    }
    setShowNoteEditor(false);
    setNoteEditorQId(null);
  };

  const deleteNote = (qId: number) => {
    const newNotes = { ...notes };
    delete newNotes[qId];
    setNotes(newNotes);
    setShowNoteEditor(false);
    setNoteEditorQId(null);
  };

  const exportNotes = () => {
    const text = Object.values(notes).map(n => {
      const q = QUESTIONS.find(q => q.id === n.questionId);
      return `Q#${n.questionId} (${n.category}): ${q?.q}\nNote: ${n.text}\n`;
    }).join('\n---\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'mta-notes.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const clearAllNotes = () => { if (confirm('Clear all notes?')) setNotes({}); };
  const resetStats = () => { if (confirm('Reset all progress?')) setStats({ totalAttempts: 0, correctAnswers: 0, currentStreak: 0, bestStreak: 0, categoryStats: {}, sessions: [] }); };

  const accuracy = stats.totalAttempts > 0 ? Math.round((stats.correctAnswers / stats.totalAttempts) * 100) : 0;

  const renderPassage = (q: Question) => {
    const passage = q.passage || (q.passageKey ? SHARED_PASSAGES[q.passageKey] : null);
    if (!passage) return null;
    return (
      <div className="passage-box">
        <p className="passage-title">{passage.title}</p>
        <p className="whitespace-pre-wrap">{passage.text}</p>
      </div>
    );
  };

  const renderGraphic = (q: Question) => {
    if (!q.graphicKey || !GRAPHICS[q.graphicKey]) return null;
    return (
      <div className="graphic-box" dangerouslySetInnerHTML={{ __html: GRAPHICS[q.graphicKey] }} />
    );
  };

  const renderTable = (q: Question) => {
    if (!q.table) return null;
    return (
      <div className="graphic-box mb-6">
        <span className="graphic-caption">{q.table.caption}</span>
        <div className="tt-wrap">
          <table className="tt">
            <thead><tr>{q.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>{q.table.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    );
  };

  // ============ RENDER ============
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="mta-gradient text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#0039A6] rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl leading-tight">MTA Conductor Exam Prep</h1>
              <p className="text-xs text-blue-200 hidden sm:block">NYC Transit Authority • Study Hub</p>
            </div>
          </div>
          <nav className="flex items-center gap-1 sm:gap-2 flex-wrap">
            {(['home', 'quiz', 'review', 'notes', 'stats'] as Tab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'tab-active' : 'hover:bg-white/10'}`}
              >
                {tab === 'notes' ? '📝 Notes' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* HOME VIEW */}
        {activeTab === 'home' && (
          <section className="fade-in">
            <div className="mta-gradient rounded-2xl overflow-hidden mb-8 relative">
              <div className="p-6 sm:p-10 text-white">
                <span className="inline-block bg-[#FFC72C] text-[#001f5c] text-xs font-bold px-3 py-1 rounded-full mb-3">EXAM PREP</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Ready Your Rails, Conductor</h2>
                <p className="text-blue-100 max-w-2xl">Master signals, rules, safety, locations, time & schedules, and <strong>325+ exam questions</strong>. Right-click any question in the navigator to add a personal note.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="stat-card mta-card rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Questions</p>
                <p className="text-2xl font-bold text-[#0039A6]">{QUESTIONS.length}</p>
              </div>
              <div className="stat-card green mta-card rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Correct</p>
                <p className="text-2xl font-bold text-[#00A651]">{stats.correctAnswers}</p>
              </div>
              <div className="stat-card red mta-card rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</p>
                <p className="text-2xl font-bold text-[#EE3124]">{accuracy}%</p>
              </div>
              <div className="stat-card orange mta-card rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Streak</p>
                <p className="text-2xl font-bold text-[#FF6B1A]">{stats.currentStreak} 🔥</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Study by Category</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {CATEGORIES.map(cat => {
                const catStats = getCategoryStats(cat.name);
                const catAccuracy = catStats.attempted > 0 ? Math.round((catStats.correct / catStats.attempted) * 100) : 0;
                const progress = catStats.attempted > 0 ? Math.round((catStats.attempted / catStats.total) * 100) : 0;
                return (
                  <div key={cat.name} className="mta-card rounded-2xl p-5 cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => startQuiz(cat.name, 0)}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{cat.icon}</span>
                      <span className="text-xs bg-blue-50 text-[#0039A6] px-2 py-1 rounded-full font-semibold">{cat.count} Qs</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{cat.name}</h4>
                    <p className="text-xs text-gray-500 mb-3">{catStats.attempted} attempted • {catAccuracy}% accuracy</p>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#0039A6] h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mta-card rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Start a Practice Quiz</h3>
              <p className="text-gray-600 mb-6">Pick a mode and begin studying immediately.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={() => startQuiz('mixed', 10)} className="btn-primary px-6 py-3 rounded-xl font-semibold">Quick Quiz (10)</button>
                <button onClick={() => setShowCustomQuiz(true)} className="btn-secondary px-6 py-3 rounded-xl font-semibold">🎯 Custom Quiz</button>
                <button onClick={() => startQuiz('mixed', 0)} className="btn-secondary px-6 py-3 rounded-xl font-semibold">All Questions</button>
                <button onClick={() => startQuiz('Official NYCTA Exam', 0)} className="btn-secondary px-6 py-3 rounded-xl font-semibold">📜 Official Exam Only (101)</button>
              </div>
            </div>
          </section>
        )}

        {/* QUIZ VIEW */}
        {activeTab === 'quiz' && (
          <section className="fade-in" ref={quizContainerRef}>
            {!quiz ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚂</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">No Quiz in Progress</h2>
                <p className="text-gray-600 mb-6">Start a new quiz to begin practicing.</p>
                <div className="mta-card rounded-2xl p-6 max-w-md mx-auto mb-6">
                  <h3 className="font-bold text-gray-800 mb-4">Choose a Quiz Mode</h3>
                  <div className="space-y-3">
                    <button onClick={() => startQuiz('mixed', 10)} className="w-full btn-primary px-5 py-3 rounded-xl font-semibold">Quick Quiz — 10 Questions</button>
                    <button onClick={() => setShowCustomQuiz(true)} className="w-full btn-secondary px-5 py-3 rounded-xl font-semibold">🎯 Custom Quiz — Pick Categories</button>
                    <button onClick={() => startQuiz('mixed', 0)} className="w-full btn-secondary px-5 py-3 rounded-xl font-semibold">All Questions</button>
                    <button onClick={() => startQuiz('Official NYCTA Exam', 0)} className="w-full btn-secondary px-5 py-3 rounded-xl font-semibold">📜 Official NYCTA Exam Only (101)</button>
                  </div>
                </div>
                <div className="mta-card rounded-2xl p-6 max-w-3xl mx-auto">
                  <h3 className="font-bold text-gray-800 mb-4">Or Pick a Category</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {CATEGORIES.map(cat => (
                      <button key={cat.name} onClick={() => startQuiz(cat.name, 0)} className="category-chip px-3 py-1.5 rounded-full text-sm font-medium">
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Practice Quiz</h2>
                    <p className="text-sm text-gray-500">{quiz.config.category} • {quiz.questions.length} questions</p>
                  </div>
                  <button onClick={exitQuiz} className="text-sm text-gray-600 hover:text-[#0039A6] px-3 py-2">← Exit</button>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Question {quiz.currentIndex + 1} of {quiz.questions.length}</span>
                    <span>{Math.round(((quiz.currentIndex + 1) / quiz.questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#0039A6] h-2 rounded-full transition-all duration-500" style={{ width: `${((quiz.currentIndex + 1) / quiz.questions.length) * 100}%` }}></div>
                  </div>
                </div>

                {/* Question Navigator */}
                <div className="mta-card rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-gray-700">Question Navigator</h4>
                      <p className="text-xs text-gray-500 mt-1">💡 <strong>Tip:</strong> Right-click any question number to add a note. Hover to view notes.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-600">Jump to:</label>
                      <input type="number" min="1" max={quiz.questions.length} className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                        onKeyDown={(e) => { if (e.key === 'Enter') { const val = parseInt((e.target as HTMLInputElement).value); jumpToQuestion(val - 1); } }}
                        onBlur={(e) => { const val = parseInt((e.target as HTMLInputElement).value); if (val) jumpToQuestion(val - 1); }}
                      />
                      <button onClick={() => { const input = document.querySelector('input[type=number]') as HTMLInputElement; if (input) jumpToQuestion(parseInt(input.value) - 1); }} className="btn-primary px-3 py-1 rounded text-xs font-semibold">Go</button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                    {quiz.questions.map((q, idx) => {
                      const answer = quiz.answers[q.id];
                      const hasNote = notes[q.id];
                      const isCurrent = idx === quiz.currentIndex;
                      let cls = 'q-nav-btn';
                      if (answer?.correct) cls += ' answered-correct';
                      else if (answer && !answer.correct) cls += ' answered-wrong';
                      if (isCurrent) cls += ' current';
                      if (hasNote) cls += ' has-note';
                      return (
                        <button
                          key={q.id}
                          className={cls}
                          data-tooltip={hasNote ? `📝 ${hasNote.text}` : undefined}
                          onClick={() => jumpToQuestion(idx)}
                          onContextMenu={(e) => { e.preventDefault(); openNoteEditor(q.id); }}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex gap-3 mt-3 text-xs text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-white border border-gray-300 inline-block"></span> Unanswered</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#d4f5e3] border border-[#00A651] inline-block"></span> Correct</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#fde3e1] border border-[#EE3124] inline-block"></span> Wrong</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#0039A6] inline-block"></span> Current</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#f59e0b] inline-block"></span> Has Note</span>
                  </div>
                </div>

                {/* Question Card */}
                {(() => {
                  const currentQ = quiz.questions[quiz.currentIndex];
                  const currentNote = notes[currentQ.id];
                  return (
                    <div className="mta-card rounded-2xl p-6 sm:p-8 mb-4">
                      <div className="flex items-start gap-3 mb-4 flex-wrap">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#0039A6]">{currentQ.category}</span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">#{currentQ.id}</span>
                        <span className="flex flex-wrap gap-1">
                          {currentQ.topics.map(t => (
                            <span key={t} className={`topic-tag ${t === 'Official NYCTA Exam' ? 'official' : ''}`}>{t}</span>
                          ))}
                        </span>
                        <button onClick={() => openNoteEditor(currentQ.id)} className="ml-auto text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold flex items-center gap-1">
                          📝 <span>{currentNote ? 'Edit Note' : 'Add Note'}</span>
                        </button>
                      </div>

                      {currentNote && (
                        <div className="mb-4 bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-xs font-bold text-amber-800 mb-1">📝 Your Note</p>
                              <p className="text-sm text-amber-900 whitespace-pre-wrap">{currentNote.text}</p>
                            </div>
                            <button onClick={() => openNoteEditor(currentQ.id)} className="text-xs text-amber-700 hover:text-amber-900 font-semibold">Edit</button>
                          </div>
                        </div>
                      )}

                      {currentQ.passageKey && (
                        <span className="shared-passage-indicator">📄 Shared Passage: {SHARED_PASSAGES[currentQ.passageKey]?.title}</span>
                      )}
                      {renderPassage(currentQ)}
                      {renderGraphic(currentQ)}
                      {renderTable(currentQ)}

                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 leading-relaxed">{currentQ.q}</h3>
                      <div className="space-y-3">
                        {currentQ.choices.map((choice, idx) => {
                          let cls = 'choice-btn w-full';
                          if (quiz.submitted) {
                            if (idx === currentQ.correct) cls += ' correct';
                            else if (idx === quiz.answers[currentQ.id]?.selected && !quiz.answers[currentQ.id]?.correct) cls += ' wrong';
                          } else if (quiz.selectedChoice === idx) {
                            cls += ' selected';
                          }
                          return (
                            <button
                              key={idx}
                              className={cls}
                              disabled={quiz.submitted}
                              onClick={() => !quiz.submitted && setQuiz({ ...quiz, selectedChoice: idx })}
                            >
                              <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span> {choice}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Feedback */}
                {quiz.submitted && (() => {
                  const currentQ = quiz.questions[quiz.currentIndex];
                  const isCorrect = quiz.answers[currentQ.id]?.correct;
                  return (
                    <div className={`rounded-2xl p-5 mb-4 border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                      <p className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                        {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                      </p>
                      <p className="text-sm text-gray-700">{currentQ.explanation}</p>
                    </div>
                  );
                })()}

                {/* Navigation */}
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <button onClick={prevQuestion} disabled={quiz.currentIndex === 0} className="btn-nav px-5 py-3 rounded-xl font-semibold">← Previous</button>
                  <div className="flex gap-2">
                    {!quiz.submitted ? (
                      <button onClick={submitAnswer} disabled={quiz.selectedChoice === null} className="btn-primary px-6 py-3 rounded-xl font-semibold">Submit Answer</button>
                    ) : quiz.currentIndex === quiz.questions.length - 1 ? (
                      <button onClick={finishQuiz} className="btn-primary px-6 py-3 rounded-xl font-semibold">View Results</button>
                    ) : (
                      <button onClick={nextQuestion} className="btn-primary px-6 py-3 rounded-xl font-semibold">Next Question →</button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* REVIEW VIEW */}
        {activeTab === 'review' && (
          <section className="fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Question Review</h2>
              <p className="text-sm text-gray-500">Browse and study every question in the bank.</p>
            </div>

            <div className="mta-card rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h4 className="text-sm font-bold text-gray-700">Question Navigator <span className="text-gray-500 font-normal">({QUESTIONS.length})</span></h4>
                  <p className="text-xs text-gray-500 mt-1">💡 Right-click any question to add a note. Hover to view notes.</p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-gray-600">Jump to #:</label>
                  <input type="number" min="1" max={QUESTIONS.length} className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                    onKeyDown={(e) => { if (e.key === 'Enter') { const el = document.getElementById(`review-q-${(e.target as HTMLInputElement).value}`); el?.scrollIntoView({ behavior: 'smooth' }); } }}
                  />
                  <button onClick={() => { const input = document.querySelector('#view-review input[type=number]') as HTMLInputElement; if (input) { const el = document.getElementById(`review-q-${input.value}`); el?.scrollIntoView({ behavior: 'smooth' }); } }} className="btn-primary px-3 py-1 rounded text-xs font-semibold">Go</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-64 overflow-y-auto">
                {QUESTIONS.map((q, idx) => {
                  const hasNote = notes[q.id];
                  let cls = 'q-nav-btn';
                  if (hasNote) cls += ' has-note';
                  return (
                    <button
                      key={q.id}
                      className={cls}
                      data-tooltip={hasNote ? `📝 ${hasNote.text}` : undefined}
                      onClick={() => { const el = document.getElementById(`review-q-${q.id}`); el?.scrollIntoView({ behavior: 'smooth' }); }}
                      onContextMenu={(e) => { e.preventDefault(); openNoteEditor(q.id); }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <button onClick={() => setReviewFilter('All')} className={`category-chip px-3 py-1.5 rounded-full text-sm font-medium ${reviewFilter === 'All' ? 'active' : ''}`}>All</button>
              {CATEGORIES.map(cat => (
                <button key={cat.name} onClick={() => setReviewFilter(cat.name)} className={`category-chip px-3 py-1.5 rounded-full text-sm font-medium ${reviewFilter === cat.name ? 'active' : ''}`}>
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {QUESTIONS.filter(q => reviewFilter === 'All' || q.category === reviewFilter).map((q, idx) => (
                <div key={q.id} id={`review-q-${q.id}`} className="mta-card rounded-2xl p-5">
                  <div className="flex items-start gap-3 mb-3 flex-wrap">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#0039A6]">{q.category}</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">#{q.id}</span>
                    <span className="flex flex-wrap gap-1">
                      {q.topics.map(t => <span key={t} className={`topic-tag ${t === 'Official NYCTA Exam' ? 'official' : ''}`}>{t}</span>)}
                    </span>
                    <button onClick={() => openNoteEditor(q.id)} className="ml-auto text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold">
                      📝 {notes[q.id] ? 'Edit Note' : 'Add Note'}
                    </button>
                  </div>
                  {notes[q.id] && (
                    <div className="mb-3 bg-amber-50 border-l-4 border-amber-400 p-2 rounded-r-lg">
                      <p className="text-xs text-amber-800">📝 {notes[q.id].text}</p>
                    </div>
                  )}
                  {q.passageKey && <span className="shared-passage-indicator">📄 Shared Passage</span>}
                  {renderPassage(q)}
                  {renderGraphic(q)}
                  {renderTable(q)}
                  <p className="font-semibold text-gray-800 mb-3">{q.q}</p>
                  <div className="space-y-2">
                    {q.choices.map((c, ci) => (
                      <div key={ci} className={`px-3 py-2 rounded-lg text-sm ${ci === q.correct ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-gray-50 border border-gray-200'}`}>
                        <span className="font-semibold mr-1">{String.fromCharCode(65 + ci)}.</span> {c}
                        {ci === q.correct && <span className="ml-2 text-green-600">✓</span>}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-600 italic"><strong>Explanation:</strong> {q.explanation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NOTES VIEW */}
        {activeTab === 'notes' && (
          <section className="fade-in">
            <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">📝 My Notes</h2>
                <p className="text-sm text-gray-500">All the notes you've added to questions.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={exportNotes} className="btn-secondary px-4 py-2 rounded-lg text-sm font-semibold">📥 Export</button>
                <button onClick={clearAllNotes} className="btn-nav px-4 py-2 rounded-lg text-sm font-semibold">🗑️ Clear All</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="mta-card rounded-2xl p-5" style={{ borderLeft: '4px solid #f59e0b' }}>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Total Notes</p>
                <p className="text-3xl font-bold text-amber-600 mt-1">{Object.keys(notes).length}</p>
              </div>
              <div className="mta-card rounded-2xl p-5" style={{ borderLeft: '4px solid var(--mta-blue)' }}>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Categories with Notes</p>
                <p className="text-3xl font-bold text-[#0039A6] mt-1">{new Set(Object.values(notes).map(n => n.category)).size}</p>
              </div>
              <div className="mta-card rounded-2xl p-5" style={{ borderLeft: '4px solid var(--mta-green)' }}>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Last Updated</p>
                <p className="text-sm font-semibold text-[#00A651] mt-2">
                  {Object.values(notes).length > 0 ? new Date(Math.max(...Object.values(notes).map(n => n.timestamp))).toLocaleDateString() : '—'}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <input type="text" placeholder="🔍 Search notes..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0039A6] focus:outline-none"
                value={notesSearch} onChange={(e) => setNotesSearch(e.target.value)} />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={() => setNotesFilter('All')} className={`category-chip px-3 py-1.5 rounded-full text-sm font-medium ${notesFilter === 'All' ? 'active' : ''}`}>All</button>
              {[...new Set(Object.values(notes).map(n => n.category))].map(cat => (
                <button key={cat} onClick={() => setNotesFilter(cat)} className={`category-chip px-3 py-1.5 rounded-full text-sm font-medium ${notesFilter === cat ? 'active' : ''}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-3">
              {Object.values(notes)
                .filter(n => notesFilter === 'All' || n.category === notesFilter)
                .filter(n => !notesSearch || n.text.toLowerCase().includes(notesSearch.toLowerCase()) || QUESTIONS.find(q => q.id === n.questionId)?.q.toLowerCase().includes(notesSearch.toLowerCase()))
                .sort((a, b) => b.timestamp - a.timestamp)
                .map(note => {
                  const q = QUESTIONS.find(q => q.id === note.questionId);
                  return (
                    <div key={note.questionId} className="note-item mta-card rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-[#0039A6]">{note.category}</span>
                            <span className="text-xs text-gray-500">Q#{note.questionId}</span>
                            <span className="text-xs text-gray-400">{new Date(note.timestamp).toLocaleDateString()}</span>
                          </div>
                          {q && <p className="text-sm text-gray-700 mb-2 line-clamp-2">{q.q}</p>}
                          <p className="text-sm text-amber-900 whitespace-pre-wrap">{note.text}</p>
                        </div>
                        <div className="flex gap-1">
                          <button onClick={() => openNoteEditor(note.questionId)} className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800 hover:bg-amber-200">Edit</button>
                          <button onClick={() => deleteNote(note.questionId)} className="text-xs px-2 py-1 rounded bg-red-100 text-red-800 hover:bg-red-200">Delete</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {Object.keys(notes).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-4xl mb-3">📝</div>
                  <p>No notes yet. Right-click any question in the quiz or review to add a note.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* STATS VIEW */}
        {activeTab === 'stats' && (
          <section className="fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Progress</h2>
              <p className="text-sm text-gray-500">Track your learning journey over time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="mta-card rounded-2xl p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Total Attempts</p>
                <p className="text-4xl font-bold text-[#0039A6] mt-2">{stats.totalAttempts}</p>
              </div>
              <div className="mta-card rounded-2xl p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Overall Accuracy</p>
                <p className="text-4xl font-bold text-[#00A651] mt-2">{accuracy}%</p>
              </div>
              <div className="mta-card rounded-2xl p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Best Streak</p>
                <p className="text-4xl font-bold text-[#FF6B1A] mt-2">{stats.bestStreak}</p>
              </div>
            </div>
            <div className="mta-card rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Performance by Category</h3>
              <div className="space-y-3">
                {CATEGORIES.map(cat => {
                  const cs = stats.categoryStats[cat.name];
                  const catAcc = cs && cs.attempts > 0 ? Math.round((cs.correct / cs.attempts) * 100) : 0;
                  const progress = cs ? Math.min(100, Math.round((cs.attempts / cat.count) * 100)) : 0;
                  return (
                    <div key={cat.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{cat.icon} {cat.name}</span>
                        <span className="text-gray-500">{cs ? `${cs.correct}/${cs.attempts}` : '0/0'} ({catAcc}%)</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0039A6] h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mta-card rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Recent Sessions</h3>
              <div className="space-y-2">
                {stats.sessions.length === 0 ? (
                  <p className="text-gray-500 text-sm">No sessions yet. Start a quiz to see your history.</p>
                ) : stats.sessions.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{s.date}</span>
                    <span className="text-sm font-semibold text-[#0039A6]">{s.score}/{s.total}</span>
                    <span className={`text-sm font-semibold ${s.accuracy >= 70 ? 'text-[#00A651]' : 'text-[#EE3124]'}`}>{s.accuracy}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button onClick={resetStats} className="text-sm text-gray-500 hover:text-[#EE3124] underline">Reset All Progress</button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-gray-500">
        <p>Unofficial study resource. Not affiliated with the MTA or NYC Transit Authority.</p>
        <p className="mt-1">Includes 101 official NYCTA exam questions plus supplemental practice questions.</p>
      </footer>

      {/* Note Editor Modal */}
      {showNoteEditor && noteEditorQId !== null && (
        <NoteEditorModal
          questionId={noteEditorQId}
          existingNote={notes[noteEditorQId]?.text || ''}
          onSave={saveNote}
          onDelete={() => { deleteNote(noteEditorQId); }}
          onClose={() => { setShowNoteEditor(false); setNoteEditorQId(null); }}
        />
      )}

      {/* Custom Quiz Modal */}
      {showCustomQuiz && (
        <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto fade-in relative">
            <button onClick={() => setShowCustomQuiz(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none z-10">×</button>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🎯</span>
                <h3 className="text-2xl font-bold text-gray-800">Build Your Custom Quiz</h3>
              </div>
              <p className="text-gray-600 mb-6">Select the categories you want to be tested on. Your quiz will include <strong>all</strong> questions from the chosen categories.</p>
              <div className="mb-4 flex gap-2">
                <button onClick={() => setCustomQuizCats(CATEGORIES.map(c => c.name))} className="btn-secondary px-4 py-2 rounded-lg text-sm font-semibold">Select All</button>
                <button onClick={() => setCustomQuizCats([])} className="btn-nav px-4 py-2 rounded-lg text-sm font-semibold">Clear All</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {CATEGORIES.map(cat => (
                  <div
                    key={cat.name}
                    className={`cat-checkbox-card mta-card rounded-xl p-3 flex items-center gap-3 ${customQuizCats.includes(cat.name) ? 'selected' : ''}`}
                    onClick={() => setCustomQuizCats(prev => prev.includes(cat.name) ? prev.filter(c => c !== cat.name) : [...prev, cat.name])}
                  >
                    <div className="cat-check"></div>
                    <span className="text-xl">{cat.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-800">{cat.name}</p>
                      <p className="text-xs text-gray-500">{cat.count} questions</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Total questions in your custom quiz:</p>
                    <p className="text-3xl font-bold text-[#0039A6]">{QUESTIONS.filter(q => customQuizCats.includes(q.category)).length}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Categories selected:</p>
                    <p className="text-3xl font-bold text-[#0039A6]">{customQuizCats.length}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end flex-wrap">
                <button onClick={() => setShowCustomQuiz(false)} className="btn-nav px-5 py-2.5 rounded-xl font-semibold">Cancel</button>
                <button onClick={startCustomQuiz} disabled={customQuizCats.length === 0} className="btn-primary px-6 py-2.5 rounded-xl font-semibold">Start Custom Quiz</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Modal */}
      {showResults && quiz && (
        <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 text-center fade-in relative">
            <button onClick={() => setShowResults(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
            {(() => {
              const correct = Object.values(quiz.answers).filter(a => a.correct).length;
              const total = quiz.questions.length;
              const pct = Math.round((correct / total) * 100);
              const elapsed = Math.floor((Date.now() - quiz.startTime) / 1000);
              const mins = Math.floor(elapsed / 60);
              const secs = elapsed % 60;
              return (
                <>
                  <div className="text-6xl mb-4">{pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
                  <p className="text-gray-600 mb-6">Here's how you did.</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">Score</p><p className="text-xl font-bold text-[#0039A6]">{correct}/{total}</p></div>
                    <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">Accuracy</p><p className="text-xl font-bold text-[#00A651]">{pct}%</p></div>
                    <div className="bg-gray-50 rounded-xl p-3"><p className="text-xs text-gray-500">Time</p><p className="text-xl font-bold text-[#FF6B1A]">{mins}:{secs.toString().padStart(2, '0')}</p></div>
                  </div>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <button onClick={() => { setShowResults(false); setActiveTab('review'); }} className="btn-secondary px-5 py-2.5 rounded-xl font-semibold text-sm">Review Answers</button>
                    <button onClick={() => { setShowResults(false); startQuiz(quiz.config.category, quiz.config.count); }} className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm">Try Again</button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

// Note Editor Modal Component
function NoteEditorModal({ questionId, existingNote, onSave, onDelete, onClose }: {
  questionId: number;
  existingNote: string;
  onSave: (text: string) => void;
  onDelete: () => void;
  onClose: () => void;
}) {
  const [text, setText] = useState(existingNote);
  const q = QUESTIONS.find(q => q.id === questionId);

  return (
    <div className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl note-editor-modal w-full p-6 fade-in relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">📝</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{existingNote ? 'Edit Note' : 'Add Note'}</h3>
            <p className="text-sm text-gray-500">Question #{questionId}</p>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-1">Question:</p>
          <p className="text-sm text-gray-800 line-clamp-3">{q?.q}</p>
        </div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Note</label>
        <textarea
          className="note-textarea"
          placeholder="Write your note here... (e.g., 'Review this later', 'Confusing wording', 'Remember: Red = Stop')"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <p className="text-xs text-gray-500 mt-2">💡 Notes are saved automatically and persist across sessions.</p>
        <div className="flex gap-2 justify-end mt-5 flex-wrap">
          {existingNote && (
            <button onClick={onDelete} className="btn-nav px-4 py-2 rounded-lg text-sm font-semibold text-red-600 hover:text-red-800">🗑️ Delete Note</button>
          )}
          <button onClick={onClose} className="btn-nav px-5 py-2 rounded-lg text-sm font-semibold">Cancel</button>
          <button onClick={() => onSave(text)} className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold">💾 Save Note</button>
        </div>
      </div>
    </div>
  );
}
