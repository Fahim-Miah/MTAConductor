// ============ SHARED PASSAGES ============
const SHARED_PASSAGES = {
  accident: {
    title: "DESCRIPTION OF ACCIDENT (Taken from a newspaper dated October 21ˢᵗ)",
    text: `Thirty-six persons were injured yesterday when a crowded Transit Authority bus and a white convertible collided in Brooklyn at about 2:20 P.M., at Frank and Boyd Streets.\n\nFour persons, including Frieda Darth, the 5-month-old daughter of Florence Darth, are being treated for serious injuries at Blair Street Hospital. The other injured people were treated at nearby Brookside Hospital and sent home. The injured included persons in the bus and the car and a 10-year-old girl, Joyce Brand, who was standing on the sidewalk with her mother, Brenda, 27 years old, of 23 Charles Street, Brooklyn.\n\nAccording to Patrolman Leo Gates, Badge 96287, of the 25ᵗʰ Precinct, the bus driven by James Bond, Badge 97528, was heading south on Frank Street when the automobile driven by Thomas Jones collided with the bus. Jones was only slightly hurt, but his passenger, Flora Smith, is in fair condition in Blair Street Hospital with a brain concussion. Thomas Jones was given a summons for going through a stop sign, using worn tires, and having an illegal registration.`
  },
  detergent: {
    title: "SITUATION",
    text: `A new detergent that is to be added to water and the resulting mixture just wiped on any surface has been tested by the station department and appeared to be excellent. However, you notice, after inspecting a large number of stations that your porters have cleaned with this detergent, that the surfaces cleaned are not as clean as they formerly were when the old method was used.`
  },
  bulletin9: {
    title: "BULLETIN ORDER NO. 9 — Subject: Plugged Turnstiles — January 19",
    text: `Station Agents, especially those assigned to the midnight tour of duty, are again warned to be alert when a passenger reports that his token is stuck in a turnstile which will not let him through. If no platformman or gateman is available, take the passenger's name and address without leaving the booth and request the passenger to pay an additional fare using one of the other turnstiles. Inform the passenger that the Authority will reimburse him for actual fare lost. Station Agents are not to leave booths unattended in such instances, but will telephone the Station Department immediately. Station Agents should notify the Transit Police Bureau immediately of any suspicious acts observed and are redirected to keep booth doors locked at all times. Booth doors must be closed and locked when Station Agents are taking turnstile readings or retrieving tokens.\n\n— John Doe, Superintendent`
  }
};

// ============ GRAPHICS ============
const GRAPHICS = {
  kkTimetable: `<div class="tt-wrap"><table class="tt"><thead><tr><th rowspan="2">Train No.</th><th colspan="5">NORTHBOUND</th><th colspan="5">SOUTHBOUND</th></tr><tr><th class="subhead">Front St.<br/>Leave</th><th class="subhead">Cane St.<br/>Leave</th><th class="subhead">Amber St.<br/>Leave</th><th class="subhead">Hall Sq.<br/>Arrive</th><th class="subhead">Hall Sq.<br/>Leave</th><th class="subhead">Hall Sq.<br/>Arrive</th><th class="subhead">Hall Sq.<br/>Leave</th><th class="subhead">Amber St.<br/>Leave</th><th class="subhead">Cane St.<br/>Leave</th><th class="subhead">Front St.<br/>Arrive</th></tr></thead><tbody><tr><td class="train-no">76</td><td>7:25</td><td>7:35</td><td>7:45</td><td>8:00</td><td>8:05</td><td>8:20</td><td>8:20</td><td>8:30</td><td>8:40</td><td>8:45</td></tr><tr><td class="train-no">77</td><td>7:40</td><td>7:50</td><td>8:00</td><td>8:15</td><td>8:20</td><td>8:35</td><td>8:35</td><td>8:45</td><td>8:55</td><td>9:00</td></tr><tr><td class="train-no">78</td><td>7:55</td><td>8:05</td><td>8:15</td><td>8:30</td><td>8:35</td><td>8:50</td><td>8:50</td><td>9:00</td><td>9:10</td><td>9:15</td></tr><tr><td class="train-no">79</td><td>8:05</td><td>8:15</td><td>8:25</td><td>8:40</td><td>8:45</td><td>9:00</td><td>9:00</td><td>9:10</td><td>9:20</td><td>9:25</td></tr><tr><td class="train-no">80</td><td>8:15</td><td>8:25</td><td>8:35</td><td>8:50</td><td>8:55</td><td>9:10</td><td>9:10</td><td>9:20</td><td>9:30</td><td>9:35</td></tr><tr><td class="train-no">81</td><td>8:25</td><td>8:35</td><td>8:45</td><td>9:00</td><td>9:05</td><td>9:20</td><td>9:20</td><td>9:30</td><td>9:40</td><td class="highlight">9:40</td></tr><tr><td class="train-no">82</td><td>8:35</td><td>8:45</td><td>8:55</td><td>9:10</td><td>9:15</td><td>9:30</td><td>9:30</td><td>9:40</td><td>9:50</td><td>9:55</td></tr><tr><td class="train-no">76</td><td>8:45</td><td>8:55</td><td>9:05</td><td>9:20</td><td>9:25</td><td>9:40</td><td>9:40</td><td>9:50</td><td>10:00</td><td>10:05</td></tr><tr><td class="train-no putin">P8:50</td><td>8:50</td><td>9:00</td><td>9:10</td><td>9:25</td><td>9:30</td><td>9:45</td><td>9:45</td><td>9:55</td><td>10:05</td><td class="layup">L10:15</td></tr><tr><td class="train-no putin">P8:55</td><td>8:55</td><td>9:05</td><td>9:15</td><td>9:30</td><td>9:35</td><td>9:50</td><td>9:50</td><td>10:00</td><td>10:10</td><td class="layup">L10:25</td></tr><tr><td class="train-no">9:00</td><td>9:00</td><td>9:10</td><td>9:20</td><td>9:35</td><td>9:40</td><td>9:55</td><td>9:55</td><td>10:05</td><td>10:15</td><td class="layup">L10:35</td></tr><tr><td class="train-no putin">P9:05</td><td>9:05</td><td>9:15</td><td>9:25</td><td>9:40</td><td>9:45</td><td>10:00</td><td>10:00</td><td>10:10</td><td>10:20</td><td>—</td></tr><tr><td class="train-no putin">P9:10</td><td>9:10</td><td>9:20</td><td>9:30</td><td>9:45</td><td>9:50</td><td>10:05</td><td>10:05</td><td>10:15</td><td>10:25</td><td>—</td></tr><tr><td class="train-no">9:15</td><td>9:15</td><td>9:25</td><td>9:35</td><td>9:50</td><td>9:55</td><td>10:10</td><td>10:10</td><td>10:20</td><td>10:30</td><td>—</td></tr></tbody><tfoot><tr><td colspan="11" class="note">NOTE: 1. <strong>P</strong> = train is put in passenger service at the location where P appears. 2. <strong>L</strong> = train is taken out of passenger service at the location where L appears. 3. Assume arrival times at Cane St. and Amber St. are the same as leaving times.</td></tr></tfoot></table></div>`,
  sevenTrain: `<div class="tt-wrap"><table class="tt"><thead><tr><th>Flushing Main St.</th><th>Mets Willets Pt.</th><th>111 St.</th><th>74 St. Broadway</th><th>61 St. Woodside</th><th>Queensboro Plaza</th><th style="background:#e0e7ff;color:#0039A6;">Times Square</th><th>34 St. Hudson Yards</th></tr></thead><tbody><tr><td>12:12</td><td>12:14</td><td>12:16</td><td>12:21</td><td>12:25</td><td>12:32</td><td>12:41</td><td>12:47</td></tr><tr><td>12:26</td><td>12:28</td><td>12:30</td><td>12:35</td><td>12:39</td><td>12:46</td><td>12:55</td><td>1:01</td></tr><tr><td>12:40</td><td>12:43</td><td>12:44</td><td>12:50</td><td>12:53</td><td>1:00</td><td>1:09</td><td>1:16</td></tr><tr><td>1:00</td><td>1:03</td><td>1:04</td><td>1:10</td><td>1:13</td><td>1:20</td><td class="highlight">1:29</td><td>1:36</td></tr><tr><td>1:20</td><td>1:23</td><td>1:24</td><td>1:30</td><td>1:33</td><td>1:40</td><td>1:49</td><td>1:56</td></tr><tr><td>1:40</td><td>1:43</td><td>1:44</td><td>1:50</td><td>1:53</td><td>2:00</td><td>2:09</td><td>2:16</td></tr></tbody></table></div>`,
  fourTrain: `<div class="tt-wrap"><table class="tt"><thead><tr><th>Utica Avenue</th><th>Franklin Avenue</th><th>Atlantic Ave–Barclays Ctr</th><th>Bowling Green</th><th style="background:#e0e7ff;color:#0039A6;">Brooklyn Bridge</th><th>Grand Central–42 St</th></tr></thead><tbody><tr><td>6:42</td><td>6:46</td><td>6:51</td><td>6:59</td><td>7:03</td><td>7:12</td></tr><tr><td>6:52</td><td>6:56</td><td>7:01</td><td>7:09</td><td>7:14</td><td>7:23</td></tr><tr><td>7:02</td><td>7:05</td><td>7:11</td><td>7:19</td><td>7:24</td><td>7:34</td></tr><tr><td>7:05</td><td>7:08</td><td>7:14</td><td>7:22</td><td>7:27</td><td>7:37</td></tr><tr><td>7:12</td><td>7:15</td><td>7:21</td><td>7:29</td><td>7:34</td><td>7:44</td></tr><tr><td>7:14</td><td>7:17</td><td>7:23</td><td>7:31</td><td class="highlight">7:36</td><td>7:46</td></tr><tr><td>7:20</td><td>7:23</td><td>7:29</td><td>7:38</td><td class="highlight">7:43</td><td>7:52</td></tr><tr><td>7:23</td><td>7:26</td><td>7:32</td><td>7:41</td><td>7:46</td><td>7:55</td></tr></tbody><tfoot><tr><td colspan="6" class="note"><strong>Layover:</strong> A short period of time between the end of one trip and the next scheduled trip. <strong>Headway:</strong> A time interval between two subway trains of the same subway line in the train schedule.</td></tr></tfoot></table></div>`,
  hornSignals: `<div class="tt-wrap"><table class="tt"><thead><tr><th style="width:120px;">SOUND</th><th>INDICATION</th></tr></thead><tbody><tr><td style="font-size:1.3rem;font-weight:700;color:#EE3124;">T</td><td>Apply brakes immediately (STOP)</td></tr><tr><td style="font-size:1.3rem;font-weight:700;color:#0039A6;">TT</td><td>Sounded when passing caution lights or flags to warn personnel of the approach of a train</td></tr><tr><td style="font-size:1.3rem;font-weight:700;color:#0039A6;">QQQ</td><td>Road Car Inspector (subway mechanic) to respond to the train</td></tr><tr><td style="font-size:1.3rem;font-weight:700;color:#0039A6;">TQ</td><td>Signal Maintainer to respond to the train</td></tr><tr><td style="font-size:1.3rem;font-weight:700;color:#EE3124;">TQTQ</td><td>Train Crew needs (Police) Assistance</td></tr></tbody><tfoot><tr><td colspan="2" class="note">NOTE: "Q" = short sound, "T" = long sound</td></tr></tfoot></table></div>`,
  trackDiagram: `<div style="display:flex;justify-content:center;"><svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg" style="max-width:520px;width:100%;"><rect width="520" height="560" fill="white"/><text x="260" y="25" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Track Diagram</text><defs><marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b"/></marker></defs><line x1="470" y1="90" x2="470" y2="50" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arr)"/><text x="470" y="40" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">N</text><line x1="160" y1="80" x2="160" y2="500" stroke="#0039A6" stroke-width="5"/><text x="160" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#0039A6">Track A</text><line x1="360" y1="80" x2="360" y2="500" stroke="#0039A6" stroke-width="5"/><text x="360" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#0039A6">Track B</text><circle cx="160" cy="480" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="120" y="485" text-anchor="end" font-size="13" fill="#1e293b" font-weight="600">Battery Park</text><circle cx="160" cy="390" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="120" y="395" text-anchor="end" font-size="13" fill="#1e293b" font-weight="600">Yukon Street</text><circle cx="160" cy="300" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="120" y="305" text-anchor="end" font-size="13" fill="#1e293b" font-weight="600">Douglas Street</text><circle cx="160" cy="210" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="120" y="215" text-anchor="end" font-size="13" fill="#1e293b" font-weight="600">Seneca Avenue</text><circle cx="160" cy="120" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="120" y="125" text-anchor="end" font-size="13" fill="#1e293b" font-weight="600">Brook Place</text><circle cx="360" cy="480" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="400" y="485" text-anchor="start" font-size="13" fill="#1e293b" font-weight="600">Battery Park</text><circle cx="360" cy="390" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="400" y="395" text-anchor="start" font-size="13" fill="#1e293b" font-weight="600">Seneca Avenue</text><circle cx="360" cy="300" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="400" y="305" text-anchor="start" font-size="13" fill="#1e293b" font-weight="600">Yukon Street</text><circle cx="360" cy="210" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="400" y="215" text-anchor="start" font-size="13" fill="#1e293b" font-weight="600">Brook Place</text><circle cx="360" cy="120" r="11" fill="white" stroke="#0039A6" stroke-width="3"/><text x="400" y="125" text-anchor="start" font-size="13" fill="#1e293b" font-weight="600">Douglas Street</text><text x="260" y="535" text-anchor="middle" font-size="12" fill="#64748b" font-style="italic">South (travelling north = going up)</text></svg></div>`,
  m60Map: `<div style="display:flex;justify-content:center;"><svg viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" style="max-width:760px;width:100%;"><rect width="760" height="520" fill="#f8fafc"/><text x="380" y="25" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">M60 SBS Route — Subway Connections Map</text><rect x="100" y="200" width="560" height="160" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="10"/><text x="380" y="285" text-anchor="middle" font-size="22" font-weight="700" fill="#166534">CENTRAL PARK</text><path d="M 60 130 L 700 130" stroke="#FF6B1A" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="330" y="100" width="100" height="28" fill="#FF6B1A" rx="5"/><text x="380" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="white">M60 SBS</text><circle cx="700" cy="130" r="16" fill="#FF6B1A"/><text x="700" y="136" text-anchor="middle" font-size="14" font-weight="700" fill="white">✈</text><text x="700" y="165" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b">LaGuardia</text><text x="700" y="178" text-anchor="middle" font-size="10" fill="#64748b">Airport (LGA)</text><circle cx="500" cy="130" r="16" fill="white" stroke="#1e293b" stroke-width="3"/><text x="500" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">125</text><text x="500" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">125 Street Station</text><g transform="translate(430, 55)"><circle cx="0" cy="0" r="10" fill="#0039A6"/><text x="0" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">A</text><circle cx="22" cy="0" r="10" fill="#0039A6"/><text x="22" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">B</text><circle cx="44" cy="0" r="10" fill="#0039A6"/><text x="44" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">C</text><circle cx="66" cy="0" r="10" fill="#0039A6"/><text x="66" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">D</text></g><g transform="translate(540, 55)"><circle cx="0" cy="0" r="10" fill="#EE3124"/><text x="0" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">1</text><circle cx="22" cy="0" r="10" fill="#00A651"/><text x="22" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">2</text><circle cx="44" cy="0" r="10" fill="#00A651"/><text x="44" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">3</text></g><g transform="translate(610, 55)"><circle cx="0" cy="0" r="10" fill="#00A651"/><text x="0" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">4</text><circle cx="22" cy="0" r="10" fill="#00A651"/><text x="22" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">5</text><circle cx="44" cy="0" r="10" fill="#808080"/><text x="44" y="4" text-anchor="middle" font-size="11" font-weight="700" fill="white">6</text></g><circle cx="280" cy="130" r="14" fill="white" stroke="#EE3124" stroke-width="3"/><text x="280" y="135" text-anchor="middle" font-size="12" font-weight="700" fill="#EE3124">1</text><text x="280" y="170" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b">116 St — Columbia University</text><circle cx="140" cy="130" r="14" fill="white" stroke="#EE3124" stroke-width="3"/><text x="140" y="135" text-anchor="middle" font-size="12" font-weight="700" fill="#EE3124">1</text><text x="140" y="170" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b">Cathedral Pkwy 110 St</text><text x="60" y="165" text-anchor="middle" font-size="10" fill="#64748b" font-style="italic">To Riverside Dr</text><rect x="60" y="400" width="640" height="100" fill="white" stroke="#cbd5e1" rx="6"/><text x="80" y="425" font-size="13" font-weight="700" fill="#1e293b">Legend:</text><line x1="80" y1="450" x2="130" y2="450" stroke="#FF6B1A" stroke-width="6"/><text x="140" y="454" font-size="11" fill="#1e293b">M60 SBS Bus Route</text><circle cx="280" cy="450" r="9" fill="white" stroke="#1e293b" stroke-width="2"/><text x="295" y="454" font-size="11" fill="#1e293b">Subway Station</text><rect x="400" y="441" width="18" height="18" fill="#dcfce7" stroke="#16a34a"/><text x="425" y="454" font-size="11" fill="#1e293b">Park</text><circle cx="500" cy="450" r="9" fill="#FF6B1A"/><text x="500" y="454" text-anchor="middle" font-size="10" font-weight="700" fill="white">✈</text><text x="515" y="454" font-size="11" fill="#1e293b">Airport</text><text x="380" y="485" text-anchor="middle" font-size="10" fill="#64748b" font-style="italic">Colored circles = subway lines serving that station</text></svg></div>`
};

// ============ CATEGORIES ============
const CATEGORIES = [
  { name: "Signal Indications", icon: "🚦", count: 17 },
  { name: "Operating Rules", icon: "📋", count: 28 },
  { name: "Safety & Emergency", icon: "🚨", count: 32 },
  { name: "Equipment", icon: "⚙️", count: 26 },
  { name: "Communication", icon: "📻", count: 28 },
  { name: "Route Knowledge", icon: "🗺️", count: 22 },
  { name: "General Knowledge", icon: "📚", count: 44 },
  { name: "Table Interpretation", icon: "📊", count: 32 },
  { name: "Locations", icon: "📍", count: 41 },
  { name: "Time & Schedule", icon: "⏰", count: 49 },
  { name: "Official NYCTA Exam", icon: "📜", count: 101 },
];

// ============ QUESTIONS ============
const QUESTIONS = [
  { id: 1, category: "Signal Indications", topics: ["Signal Indications"], q: "A signal displaying a RED aspect means:", choices: ["Proceed at restricted speed", "Stop and do not proceed until authorized", "Proceed at normal speed", "Reduce speed to 15 MPH"], correct: 1, explanation: "A red signal is an absolute stop signal." },
  { id: 2, category: "Signal Indications", topics: ["Signal Indications"], q: "What does a YELLOW signal aspect indicate?", choices: ["Stop", "Proceed at restricted speed", "Approach — prepare to stop at next signal", "Clear — proceed at authorized speed"], correct: 2, explanation: "Yellow is an 'Approach' indication." },
  { id: 3, category: "Signal Indications", topics: ["Signal Indications"], q: "A GREEN signal aspect indicates:", choices: ["Stop", "Proceed at restricted speed", "Approach next signal prepared to stop", "Clear — proceed at authorized speed"], correct: 3, explanation: "Green is a 'Clear' indication." },
  { id: 4, category: "Signal Indications", topics: ["Signal Indications"], q: "A flashing YELLOW signal typically indicates:", choices: ["Stop immediately", "Proceed at normal speed", "Advance approach — prepare to stop at second signal", "Track out of service"], correct: 2, explanation: "Flashing yellow is an 'Advance Approach' indication." },
  { id: 5, category: "Signal Indications", topics: ["Signal Indications"], q: "When a signal is completely dark (no aspect showing), it should be treated as:", choices: ["Clear", "Approach", "Most restrictive aspect (Stop)", "Restricted speed only"], correct: 2, explanation: "A dark signal is treated as displaying the most restrictive aspect — stop." },
  { id: 6, category: "Signal Indications", topics: ["Signal Indications"], q: "A dwarf signal displaying red means:", choices: ["Proceed at restricted speed", "Stop — do not pass", "Clear", "Switch is aligned"], correct: 1, explanation: "A red dwarf signal means stop." },
  { id: 7, category: "Operating Rules", topics: ["Operating Rules"], q: "What is the maximum authorized speed for a subway train in a tunnel under normal conditions?", choices: ["25 MPH", "35 MPH", "55 MPH", "Varies by route and signal"], correct: 3, explanation: "Speed limits vary by route, track condition, and signal indication." },
  { id: 8, category: "Operating Rules", topics: ["Operating Rules"], q: "When operating in 'Restricted Speed' mode, the train must:", choices: ["Not exceed 15 MPH and be able to stop within half the range of vision", "Not exceed 25 MPH", "Stop at every signal", "Sound the horn continuously"], correct: 0, explanation: "Restricted speed means proceeding at a speed that allows stopping within half the range of vision, not exceeding 15 MPH." },
  { id: 9, category: "Operating Rules", topics: ["Operating Rules"], q: "Before moving a train, the conductor must:", choices: ["Sound the horn twice", "Verify all doors are closed and secure, and receive proper signal from the motorman", "Check the weather", "Call the dispatcher"], correct: 1, explanation: "The conductor must ensure all doors are closed and secure." },
  { id: 10, category: "Operating Rules", topics: ["Operating Rules"], q: "A train approaching a bumping post at the end of a track must:", choices: ["Stop at least 50 feet away", "Stop before contacting the bumping post", "Slow to 5 MPH and contact it gently", "Sound horn and proceed"], correct: 1, explanation: "Trains must stop before contacting the bumping post." },
  { id: 11, category: "Operating Rules", topics: ["Operating Rules"], q: "When a train is stopped at a station for an extended period, the conductor should:", choices: ["Leave the train unattended", "Make periodic announcements to passengers", "Turn off all lights", "Exit the train"], correct: 1, explanation: "The conductor should make periodic announcements." },
  { id: 12, category: "Operating Rules", topics: ["Operating Rules"], q: "The proper procedure when passing a stop signal without authority is to:", choices: ["Continue to next station", "Stop immediately and notify the dispatcher", "Reverse direction", "Sound the horn"], correct: 1, explanation: "Stop immediately and notify the dispatcher." },
  { id: 13, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "In the event of a fire on the train, the conductor's first action should be to:", choices: ["Open all doors immediately", "Notify the motorman and dispatcher, and evacuate passengers if safe", "Attempt to fight the fire alone", "Continue to next station"], correct: 1, explanation: "Notify the motorman and dispatcher immediately." },
  { id: 14, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "When evacuating passengers through the tunnel, they should walk:", choices: ["In any direction", "Toward the nearest station or exit, away from the third rail", "Along the third rail", "Back the way the train came"], correct: 1, explanation: "Passengers should be directed toward the nearest station/exit, away from the third rail." },
  { id: 15, category: "Safety & Emergency", topics: ["Safety & Emergency", "Equipment"], q: "The third rail in the NYC subway carries approximately:", choices: ["120 volts AC", "240 volts DC", "600-650 volts DC", "1000 volts AC"], correct: 2, explanation: "The third rail carries approximately 600-650 volts DC." },
  { id: 16, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "If a passenger falls onto the tracks, the conductor should:", choices: ["Jump down to rescue them", "Immediately notify the motorman and dispatcher, and stop all train movement", "Throw them a rope", "Wait for them to climb up"], correct: 1, explanation: "Immediately notify the motorman and dispatcher." },
  { id: 17, category: "Safety & Emergency", topics: ["Safety & Emergency", "Equipment"], q: "The emergency brake valve (conductor's valve) is used to:", choices: ["Slow the train gradually", "Stop the train immediately in an emergency", "Release the brakes", "Test the brakes"], correct: 1, explanation: "The conductor's valve applies an emergency brake application." },
  { id: 18, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "When using a fire extinguisher, the proper technique is remembered by the acronym:", choices: ["STOP", "PASS (Pull, Aim, Squeeze, Sweep)", "FIRE", "SAFE"], correct: 1, explanation: "PASS: Pull, Aim, Squeeze, Sweep." },
  { id: 19, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "In the event of a derailment, the conductor should first:", choices: ["Try to re-rail the train", "Ensure passenger safety, notify dispatcher, and await instructions", "Evacuate immediately without notification", "Continue to next station"], correct: 1, explanation: "Passenger safety comes first." },
  { id: 20, category: "Equipment", topics: ["Equipment"], q: "The primary purpose of the coupler on a subway car is to:", choices: ["Connect cars together mechanically and electrically", "Apply the brakes", "Control the doors", "Power the train"], correct: 0, explanation: "Couplers connect cars together both mechanically and electrically." },
  { id: 21, category: "Equipment", topics: ["Equipment"], q: "The 'dead man's pedal' or 'alerter' in the motorman's cab is designed to:", choices: ["Control the doors", "Ensure the motorman is alert; applies brakes if not depressed", "Sound the horn", "Control the lights"], correct: 1, explanation: "The alerter ensures the motorman is alert." },
  { id: 22, category: "Equipment", topics: ["Equipment"], q: "The pantograph is used on trains that draw power from:", choices: ["Third rail", "Overhead catenary wire", "Diesel engine", "Battery"], correct: 1, explanation: "A pantograph collects power from an overhead catenary wire." },
  { id: 23, category: "Equipment", topics: ["Equipment"], q: "The 'trainline' refers to:", choices: ["The route the train travels", "The electrical/control circuit running the length of the train", "The passenger seating area", "The schedule"], correct: 1, explanation: "The trainline is the electrical/control circuit that runs through all cars." },
  { id: 24, category: "Equipment", topics: ["Equipment"], q: "Air brakes on a subway train operate on the principle of:", choices: ["Vacuum pressure", "Compressed air — loss of pressure applies brakes", "Hydraulic fluid", "Electric motors only"], correct: 1, explanation: "Subway air brakes are fail-safe: loss of air pressure automatically applies the brakes." },
  { id: 25, category: "Equipment", topics: ["Equipment"], q: "The 'shoe beam' on a subway car holds the:", choices: ["Door mechanisms", "Third rail contact shoes", "Brake cylinders", "Couplers"], correct: 1, explanation: "The shoe beam holds the contact shoes that collect power from the third rail." },
  { id: 26, category: "Communication", topics: ["Communication"], q: "The standard radio channel for train operations is typically called:", choices: ["Channel 1", "Train Operations / Control Channel", "Emergency Channel", "Public Channel"], correct: 1, explanation: "Train operations use the designated control/operations channel." },
  { id: 27, category: "Communication", topics: ["Communication"], q: "When communicating on the radio, you should:", choices: ["Use slang and abbreviations", "Speak clearly, identify yourself, and use proper terminology", "Shout to be heard", "Keep transmissions as long as possible"], correct: 1, explanation: "Radio communication should be clear, concise, and use proper terminology." },
  { id: 28, category: "Communication", topics: ["Communication"], q: "The emergency radio channel is used for:", choices: ["Routine announcements", "Emergency communications only", "Personal calls", "Music"], correct: 1, explanation: "The emergency channel is reserved for emergency communications only." },
  { id: 29, category: "Communication", topics: ["Communication"], q: "The proper way to identify yourself on the radio is:", choices: ["Your first name", "Your train number/ID and position", "Just 'conductor'", "Your badge number only"], correct: 1, explanation: "Identify by train number/ID and your position." },
  { id: 30, category: "Communication", topics: ["Communication"], q: "A clear language policy on MTA radio means:", choices: ["Only use 10-codes", "Use plain, clear language for safety-critical communications", "Speak in code", "Use only numbers"], correct: 1, explanation: "Modern transit agencies emphasize plain, clear language." },
  { id: 31, category: "Route Knowledge", topics: ["Route Knowledge"], q: "A 'terminal' in subway operations refers to:", choices: ["Any station", "The end of the line where trains reverse direction", "A maintenance facility", "A ticket office"], correct: 1, explanation: "A terminal is the end of the line where trains reverse direction." },
  { id: 32, category: "Route Knowledge", topics: ["Route Knowledge"], q: "A 'lay-up' track is used to:", choices: ["Store trains out of service", "Load passengers", "Repair tracks", "Test signals"], correct: 0, explanation: "Lay-up tracks store trains that are out of service." },
  { id: 33, category: "Route Knowledge", topics: ["Route Knowledge"], q: "A 'crossover' allows a train to:", choices: ["Cross over a river", "Move from one track to another", "Cross a road", "Pass another train at speed"], correct: 1, explanation: "A crossover allows a train to move from one track to an adjacent track." },
  { id: 34, category: "Route Knowledge", topics: ["Route Knowledge"], q: "The 'diamond' in track work refers to:", choices: ["A type of signal", "Where two tracks cross each other", "A station layout", "A type of rail"], correct: 1, explanation: "A diamond is where two tracks cross each other." },
  { id: 35, category: "Route Knowledge", topics: ["Route Knowledge"], q: "A 'pocket track' is used for:", choices: ["Storing a train temporarily between services", "Passenger waiting", "Maintenance only", "Emergency evacuation"], correct: 0, explanation: "A pocket track allows a train to be stored temporarily." },
  { id: 36, category: "General Knowledge", topics: ["General Knowledge"], q: "The MTA stands for:", choices: ["Metropolitan Transportation Authority", "Metro Transit Agency", "Municipal Transport Association", "Metropolitan Train Authority"], correct: 0, explanation: "MTA stands for Metropolitan Transportation Authority." },
  { id: 37, category: "General Knowledge", topics: ["General Knowledge"], q: "NYC Transit operates how many subway lines (by letter/number)?", choices: ["15", "24", "36", "47"], correct: 2, explanation: "NYC Transit operates 36 subway routes." },
  { id: 38, category: "General Knowledge", topics: ["General Knowledge"], q: "The NYC subway system has approximately how many stations?", choices: ["250", "472", "600", "800"], correct: 1, explanation: "The NYC subway has 472 stations." },
  { id: 39, category: "General Knowledge", topics: ["General Knowledge"], q: "The conductor's primary responsibility is:", choices: ["Driving the train", "Passenger safety, door operation, and train supervision", "Selling tickets", "Cleaning the train"], correct: 1, explanation: "The conductor is responsible for passenger safety, door operation, and overall train supervision." },
  { id: 40, category: "General Knowledge", topics: ["General Knowledge", "Route Knowledge"], q: "A 'turnback' is when a train:", choices: ["Reverses direction before reaching the terminal", "Returns to the yard", "Goes into a pocket track", "All of the above"], correct: 3, explanation: "A turnback can involve reversing, returning to yard, or using a pocket track." },
  { id: 41, category: "General Knowledge", topics: ["General Knowledge", "Operating Rules", "Time & Schedule"], q: "The 'headway' refers to:", choices: ["The front of the train", "Time/distance between consecutive trains", "The train's speed", "Track gauge"], correct: 1, explanation: "Headway is the time or distance between consecutive trains." },
  { id: 42, category: "General Knowledge", topics: ["General Knowledge", "Operating Rules"], q: "A 'work train' or 'maintenance train' has:", choices: ["Priority over all passenger trains", "Lower priority than passenger trains unless authorized", "Same priority as passenger trains", "No priority rules"], correct: 1, explanation: "Work trains generally have lower priority." },
  { id: 43, category: "General Knowledge", topics: ["General Knowledge", "Safety & Emergency"], q: "The 'blue flag' protection system is used to:", choices: ["Signal trains to stop", "Protect workers on or near tracks from train movement", "Mark defective cars", "Indicate a station"], correct: 1, explanation: "Blue flag protection ensures workers are protected from train movement." },
  { id: 44, category: "General Knowledge", topics: ["General Knowledge", "Equipment"], q: "When coupling cars, the conductor must verify:", choices: ["Only the mechanical connection", "Both mechanical and electrical connections are secure", "Only the electrical connection", "Nothing — it's automatic"], correct: 1, explanation: "Both mechanical and electrical connections must be verified." },
  { id: 45, category: "General Knowledge", topics: ["General Knowledge", "Safety & Emergency"], q: "A 'flagman' is responsible for:", choices: ["Selling flags", "Protecting a work zone with flags/signals", "Cleaning signals", "Driving the train"], correct: 1, explanation: "A flagman protects a work zone by displaying flags/signals." },
  { id: 46, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "The emergency exit hatches on subway cars are located:", choices: ["Only at the ends", "On the roof and/or ends of cars", "Under the seats", "In the vestibules only"], correct: 1, explanation: "Emergency exits are typically on the roof and/or at the ends of cars." },
  { id: 47, category: "Operating Rules", topics: ["Operating Rules"], q: "A 'clear block' means:", choices: ["The track is free of trains and safe to enter", "The track is blocked", "The signal is red", "The train must stop"], correct: 0, explanation: "A clear block means the track section is free of trains." },
  { id: 48, category: "Equipment", topics: ["Equipment"], q: "The 'MU' (Multiple Unit) control allows:", choices: ["One motorman to control multiple cars from a single cab", "Multiple trains on one track", "Multiple conductors", "Multiple routes"], correct: 0, explanation: "MU control allows one motorman to control multiple coupled cars." },
  { id: 49, category: "Communication", topics: ["Communication"], q: "The PA (Public Address) system is used to:", choices: ["Communicate with the dispatcher only", "Make announcements to passengers", "Test the radio", "Call other trains"], correct: 1, explanation: "The PA system is used to make announcements to passengers." },
  { id: 50, category: "Safety & Emergency", topics: ["Safety & Emergency"], q: "If the train loses power in a tunnel, the conductor should:", choices: ["Evacuate immediately", "Notify the motorman and dispatcher, await instructions, and reassure passengers", "Open doors and let passengers out", "Walk to the next station"], correct: 1, explanation: "Notify the motorman and dispatcher, await instructions, and reassure passengers." },
  { id: 51, category: "Table Interpretation", topics: ["Table Interpretation", "Equipment"], q: "Based on the 'Standard Subway Car Dimensions' table, what is the total length of a 10-car train consisting entirely of R160 models?", table: { caption: "Table 1: Standard Subway Car Dimensions", headers: ["Model", "Length (ft)", "Width (ft)", "Height (ft)", "Max Capacity"], rows: [["R46", "75", "10", "12.5", "1,200"], ["R142", "51", "10", "12.5", "800"], ["R160", "51", "10", "12.5", "800"], ["R179", "51", "10", "12.5", "800"], ["R211", "51", "10", "12.5", "800"]] }, choices: ["510 feet", "750 feet", "600 feet", "51 feet"], correct: 0, explanation: "R160 = 51 ft × 10 = 510 ft." },
  { id: 52, category: "Table Interpretation", topics: ["Table Interpretation", "Signal Indications"], q: "According to the 'Signal Aspects' table, if you see a signal displaying 'Red over Yellow', what is your required action?", table: { caption: "Table 2: Signal Aspect Meanings", headers: ["Aspect Display", "Indication Name", "Required Action"], rows: [["Green", "Clear", "Proceed at authorized speed"], ["Yellow", "Approach", "Prepare to stop at next signal"], ["Red", "Stop", "Stop and do not proceed"], ["Red over Yellow", "Restricting", "Proceed at restricted speed (max 15 MPH)"], ["Flashing Yellow", "Advance Approach", "Prepare to stop at 2nd signal"]] }, choices: ["Stop immediately", "Proceed at authorized speed", "Proceed at restricted speed (max 15 MPH)", "Prepare to stop at next signal"], correct: 2, explanation: "'Red over Yellow' indicates 'Restricting' — proceed at restricted speed." },
  { id: 53, category: "Table Interpretation", topics: ["Table Interpretation", "Operating Rules"], q: "Using the 'Track Speed Limits' table, what is the maximum authorized speed for a train traveling through a sharp curve in Zone C?", table: { caption: "Table 3: Track Speed Limits by Zone and Condition", headers: ["Zone", "Straight Track (MPH)", "Moderate Curve (MPH)", "Sharp Curve (MPH)", "Station Approach (MPH)"], rows: [["Zone A (Manhattan)", "55", "35", "15", "10"], ["Zone B (Bronx/Queens)", "55", "35", "20", "10"], ["Zone C (Brooklyn)", "50", "30", "15", "10"], ["Zone D (Staten Island)", "45", "25", "10", "10"]] }, choices: ["15 MPH", "20 MPH", "30 MPH", "10 MPH"], correct: 0, explanation: "Zone C + Sharp Curve = 15 MPH." },
  { id: 54, category: "Table Interpretation", topics: ["Table Interpretation", "Equipment"], q: "Refer to the 'Emergency Equipment Inventory' table. How many fire extinguishers are required in total for a 6-car train?", table: { caption: "Table 4: Emergency Equipment Inventory Per Car", headers: ["Equipment Type", "Quantity Per Car", "Location", "Inspection Frequency"], rows: [["Fire Extinguisher (ABC)", "2", "End Vestibules", "Monthly"], ["First Aid Kit", "1", "Conductor's Cab", "Quarterly"], ["Emergency Hammer", "4", "Windows", "Annually"], ["Flashlight", "2", "Crew Areas", "Weekly"]] }, choices: ["6", "10", "12", "24"], correct: 2, explanation: "2 × 6 = 12 fire extinguishers." },
  { id: 55, category: "Table Interpretation", topics: ["Table Interpretation", "Communication"], q: "Based on the 'Radio Channel Usage' table, which channel should a conductor use to report a minor delay that is not an emergency?", table: { caption: "Table 5: Radio Channel Usage Guide", headers: ["Channel Name", "Primary Use", "Priority Level", "Notes"], rows: [["Channel 1 (Ops)", "Routine train movements, delays, status updates", "Normal", "Main operational channel"], ["Channel 2 (Emerg)", "Life safety emergencies, fires, medical", "High", "Keep clear for emergencies"], ["Channel 3 (Maint)", "Track maintenance coordination", "Low", "Work trains only"], ["Channel 4 (Admin)", "Administrative and non-operational talk", "Lowest", "Do not use for train ops"]] }, choices: ["Channel 1 (Ops)", "Channel 2 (Emerg)", "Channel 3 (Maint)", "Channel 4 (Admin)"], correct: 0, explanation: "Channel 1 (Ops) is for routine train movements and delays." },
  { id: 56, category: "Table Interpretation", topics: ["Table Interpretation", "Equipment"], q: "According to the 'Brake Test Procedures' table, what is the minimum air pressure required before a train can depart the yard?", table: { caption: "Table 6: Brake Test Procedures and Standards", headers: ["Test Type", "Minimum Pressure (PSI)", "Maximum Leakage (PSI/min)", "Action if Failed"], rows: [["Initial Application", "90", "3", "Retest once"], ["Full Service", "90", "3", "Tag car out of service"], ["Emergency Application", "90", "N/A", "Inspect valves"], ["Yard Departure Check", "90", "2", "Do not depart"]] }, choices: ["70 PSI", "80 PSI", "90 PSI", "100 PSI"], correct: 2, explanation: "Yard Departure Check = 90 PSI minimum." },
  { id: 57, category: "Table Interpretation", topics: ["Table Interpretation", "Time & Schedule"], q: "Using the 'Shift Schedule' table, if a conductor starts their shift at 06:00, when is their scheduled meal break?", table: { caption: "Table 7: Typical Conductor Shift Schedule", headers: ["Shift Start", "Morning Report", "Meal Break Window", "End of Shift"], rows: [["06:00", "05:45", "10:00 - 11:00", "14:00"], ["14:00", "13:45", "18:00 - 19:00", "22:00"], ["22:00", "21:45", "02:00 - 03:00", "06:00"]] }, choices: ["08:00 - 09:00", "10:00 - 11:00", "12:00 - 13:00", "14:00 - 15:00"], correct: 1, explanation: "Shift starting at 06:00 has meal break 10:00 - 11:00." },
  { id: 58, category: "Table Interpretation", topics: ["Table Interpretation", "Equipment"], q: "Refer to the 'Defect Code' table. What action is required for a defect coded 'D-4'?", table: { caption: "Table 8: Common Defect Codes and Actions", headers: ["Code", "Description", "Severity", "Required Action"], rows: [["D-1", "Minor Interior Damage", "Low", "Report at end of run"], ["D-2", "Door Sensor Fault", "Medium", "Take car out of service at terminal"], ["D-3", "Brake Shoe Wear", "High", "Immediate inspection"], ["D-4", "Third Rail Shoe Missing", "Critical", "Stop immediately, do not move"]] }, choices: ["Report at end of run", "Take car out of service at terminal", "Immediate inspection", "Stop immediately, do not move"], correct: 3, explanation: "Code D-4 requires 'Stop immediately, do not move'." },
  { id: 59, category: "Table Interpretation", topics: ["Table Interpretation", "Operating Rules"], q: "Based on the 'Weather Protocol' table, what is the speed restriction when visibility is less than 100 feet due to fog?", table: { caption: "Table 9: Weather-Related Operating Protocols", headers: ["Condition", "Visibility/Threshold", "Speed Restriction", "Additional Action"], rows: [["Heavy Rain", "< 500 ft visibility", "Reduce by 10 MPH", "Wipers on high"], ["Snow/Ice", "Accumulation > 1 inch", "Reduce by 20 MPH", "Sand cars"], ["Fog", "< 100 ft visibility", "Restricted Speed (15 MPH)", "Sound horn frequently"], ["High Wind", "> 50 MPH gusts", "Suspend outdoor work", "Secure loose items"]] }, choices: ["Reduce by 10 MPH", "Reduce by 20 MPH", "Restricted Speed (15 MPH)", "Suspend outdoor work"], correct: 2, explanation: "Fog with < 100 ft visibility = Restricted Speed (15 MPH)." },
  { id: 60, category: "Table Interpretation", topics: ["Table Interpretation", "Equipment"], q: "According to the 'Passenger Capacity' table, which car model has the highest standing capacity?", table: { caption: "Table 10: Passenger Capacity by Model", headers: ["Model", "Seated Capacity", "Standing Capacity", "Total Capacity"], rows: [["R46", "100", "1100", "1200"], ["R142", "80", "720", "800"], ["R160", "80", "720", "800"], ["R179", "80", "720", "800"], ["R211", "80", "720", "800"]] }, choices: ["R46", "R142", "R160", "R211"], correct: 0, explanation: "R46 has Standing Capacity of 1100." },
  { id: 101, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "Each employee using supplies from one of the first aid kits throughout the subway is required to submit a report of the occurrence. The MOST likely reason for requiring this report is so that the:", choices: ["employee may be given credit for his action", "used material will be sure to be replaced", "doctor can check if the proper first aid was given", "employee will use a first aid kit only when necessary"], correct: 1, explanation: "To ensure used material is replaced so the kit remains fully stocked." },
  { id: 102, category: "Equipment", topics: ["Equipment", "Official NYCTA Exam"], q: "As an alert passenger, you have probably noticed that the electrified rail is:", choices: ["one of the running rails", "located between the running rails", "suspended from the subway roof", "placed to one side of the running rails"], correct: 3, explanation: "The third rail is placed to one side of the running rails." },
  { id: 103, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "The use of intoxicating liquor by employees while on duty is strictly prohibited by the rules of the transit authority MAINLY because the use of such liquor:", choices: ["is expensive", "is immoral", "adversely affects their judgment", "causes a high rate of absenteeism"], correct: 2, explanation: "Intoxicating liquor adversely affects judgment." },
  { id: 104, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "Safety on any job is BEST assured by:", choices: ["working very slowly", "following every rule", "never working alone", "keeping alert"], correct: 1, explanation: "Following every rule is the best way to assure safety." },
  { id: 105, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "As a safety feature, the edges of many subway station platforms are painted. The color of the paint used is GENERALLY:", choices: ["green", "white", "red", "yellow"], correct: 3, explanation: "Yellow paint is used on platform edges as a high-visibility warning." },
  { id: 106, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "When official forms are to be filled out by employees, it is sometimes requested that certain information be printed rather than written MAINLY because printing:", choices: ["is easier to do", "is legally required", "is more legible", "takes less space"], correct: 2, explanation: "Printing is more legible than cursive handwriting." },
  { id: 107, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Of the following New York City parks, the one which is NOT located in the Borough of The Bronx is:", choices: ["Pelham Bay Park", "Marine Park", "Crotona Park", "Van Cortlandt Park"], correct: 1, explanation: "Marine Park is located in Brooklyn, not the Bronx." },
  { id: 108, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "If a passenger wishes to get to Hall Square station by 8:45 and is going to board the train at Cane St. station, he should plan to board the train which leaves this station at:", choices: ["8:05", "8:15", "8:25", "8:30"], correct: 1, explanation: "Train 78 leaves Cane St. at 8:15 and arrives Hall Square at 8:30, before the 8:45 deadline." },
  { id: 109, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "For train No. 81, the total length of time, including the 5-minute layover at Hall Square, required for one round trip from Front St. to Hall Square and return is:", choices: ["70 minutes", "75 minutes", "80 minutes", "100 minutes"], correct: 1, explanation: "Front St. departure 8:25 to return 9:40 = 75 minutes total." },
  { id: 110, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "If a passenger arrives at the Amber St. station just before 9:00, he can expect to get to Front St. at:", choices: ["8:05", "9:20", "9:25", "10:00"], correct: 1, explanation: "Based on the answer key, the answer is 9:20." },
  { id: 111, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "After 9:15, there is a train leaving Front St. every _____ minutes.", choices: ["5", "5 or 10", "10", "10 or 15"], correct: 2, explanation: "After 9:15, trains leave Front St. at 10-minute intervals." },
  { id: 112, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam"], graphicKey: "kkTimetable", q: "The TOTAL number of different train numbers listed in the portion of the timetable shown is:", choices: ["14", "12", "11", "10"], correct: 2, explanation: "Counting all unique train numbers gives 11 different trains." },
  { id: 113, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "The length of time that trains are scheduled to remain at Hall Square is _____ minutes.", choices: ["always 5", "always 10", "always 15", "either 5 or 15"], correct: 0, explanation: "Trains are scheduled for a consistent 5-minute layover at Hall Square." },
  { id: 114, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam"], graphicKey: "kkTimetable", q: "The TOTAL number of trains for which two complete round-trips are shown in the timetable is:", choices: ["1", "2", "3", "4"], correct: 2, explanation: "Three trains show two complete round-trips." },
  { id: 115, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam"], graphicKey: "kkTimetable", q: "The number of trains which are put in passenger service at Front St. that continue in service for more than one round-trip is:", choices: ["4", "3", "2", "1"], correct: 2, explanation: "Two trains are put into service at Front St. (marked with 'P')." },
  { id: 116, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "kkTimetable", q: "The TOTAL number of scheduled trains which pass Amber St. station in both directions from 8:30 to 9:00 is:", choices: ["2", "4", "6", "8"], correct: 2, explanation: "Counting both directions gives 6 total trains." },
  { id: 117, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Route Knowledge"], graphicKey: "kkTimetable", q: "From the timetable, you can infer that a number of storage tracks or a yard is located at or near:", choices: ["Front St.", "Hall Square", "Cane St.", "Amber St."], correct: 0, explanation: "Front St. shows trains being put into and taken out of service (P and L markers)." },
  { id: 118, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "A passenger has fallen on the platform and apparently broken a leg. Before calling for an ambulance, it would be BEST to:", choices: ["make him comfortable where he has fallen", "apply a tourniquet", "move him to a nearby bench and make him comfortable", "ask him about the details of the accident"], correct: 0, explanation: "With a suspected broken leg, make the person comfortable where they fell." },
  { id: 119, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The car that collided with the bus was a:", choices: ["sedan", "sports car", "convertible", "station wagon"], correct: 2, explanation: "The passage states the automobile was a 'white convertible'." },
  { id: 120, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The number of people treated at Brookside Hospital was:", choices: ["4", "5", "32", "36"], correct: 2, explanation: "36 total - 4 at Blair = 32 at Brookside." },
  { id: 121, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], passageKey: "accident", q: "This accident happened in the:", choices: ["early morning", "early afternoon", "late morning", "late afternoon"], correct: 1, explanation: "2:20 P.M. is in the early afternoon." },
  { id: 122, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The name of the mother of the seriously injured infant is:", choices: ["Florence", "Frieda", "Joyce", "Brenda"], correct: 0, explanation: "Frieda Darth's mother is Florence Darth." },
  { id: 123, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The name of the patrolman who reported on this accident is:", choices: ["James", "Frank", "Thomas", "Leo"], correct: 3, explanation: "Patrolman Leo Gates reported on the accident." },
  { id: 124, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], passageKey: "accident", q: "It is clear that the 10-year-old girl:", choices: ["lives on Charles Street", "was seriously injured", "fell out of the passenger car", "was a passenger on the bus"], correct: 0, explanation: "Joyce Brand's mother lives at 23 Charles Street." },
  { id: 125, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The number of violations for which the driver of the car was summoned is:", choices: ["1", "2", "3", "4"], correct: 2, explanation: "Three violations: stop sign, worn tires, illegal registration." },
  { id: 126, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The badge number of the Transit Authority bus driver is:", choices: ["96287", "97528", "92687", "95728"], correct: 1, explanation: "Bus driver James Bond has Badge 97528." },
  { id: 127, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], passageKey: "accident", q: "The accident described took place on a:", choices: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 1, explanation: "Newspaper dated Oct 21, accident was 'yesterday' = Oct 20 = Wednesday." },
  { id: 128, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "accident", q: "The patrolman who reported on this accident came from the _____ Precinct.", choices: ["23rd", "24th", "25th", "27th"], correct: 2, explanation: "Patrolman Leo Gates is from the 25th Precinct." },
  { id: 129, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "After giving you an order over the phone, your supervisor is likely to ask you to repeat it back to him to make sure that you:", choices: ["will carry out the order as given", "are the Station Agent on duty", "heard the order correctly", "have written the order down"], correct: 2, explanation: "Having you repeat the order ensures you heard it correctly." },
  { id: 130, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Grand Concourse is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 1, explanation: "Grand Concourse is in The Bronx." },
  { id: 131, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Grand Army Plaza is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 2, explanation: "Grand Army Plaza is in Brooklyn." },
  { id: 132, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Grand Central Parkway is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 3, explanation: "Grand Central Parkway is in Queens." },
  { id: 133, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Citi Field is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 3, explanation: "Citi Field is in Queens." },
  { id: 134, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Kennedy Airport (JFK) is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 3, explanation: "JFK Airport is in Queens." },
  { id: 135, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Hayden Planetarium is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 0, explanation: "The Hayden Planetarium is in Manhattan." },
  { id: 136, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Fort Hamilton is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 2, explanation: "Fort Hamilton is in Brooklyn." },
  { id: 137, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Manhattan College is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 1, explanation: "Manhattan College is in The Bronx (Riverdale)." },
  { id: 138, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Erie Basin is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 2, explanation: "Erie Basin is in Brooklyn." },
  { id: 139, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Metropolitan Museum of Art is located in which borough?", choices: ["Manhattan", "The Bronx", "Brooklyn", "Queens"], correct: 0, explanation: "The Met is in Manhattan." },
  { id: 140, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "It is generally true that MOST accidents to employees result from:", choices: ["too heavy work schedules", "carelessness", "poor light", "insufficient knowledge about the work"], correct: 1, explanation: "Most accidents result from carelessness." },
  { id: 141, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "You will probably be appreciated MOST by your superior if you:", choices: ["frequently ask him questions about your job", "often make suggestions about improving the working condition", "tell him every time any co-worker has violated a rule", "do your work accurately and on time"], correct: 3, explanation: "Doing work accurately and on time is most valued." },
  { id: 142, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "In most cases, the logical and proper source from which you should first seek explanation of a written order which you do NOT understand would be the:", choices: ["Transit Authority legal department", "general superintendent", "book of rules", "person who is your immediate superior"], correct: 3, explanation: "Your immediate superior is the most appropriate first source." },
  { id: 143, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "Signs in the subway forbid passengers to:", choices: ["carry any packages", "run upstairs", "talk to the conductor", "cross the tracks"], correct: 3, explanation: "Crossing the tracks is strictly forbidden." },
  { id: 144, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Yankee Stadium is located in the borough of:", choices: ["Brooklyn", "Bronx", "Manhattan", "Queens"], correct: 1, explanation: "Yankee Stadium is in The Bronx." },
  { id: 145, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam", "Time & Schedule"], q: "On Mondays through Fridays between January 19th and January 22nd, track maintenance is performed from 10 PM each evening to 5 AM the next morning. The B and D trains operate on tracks 2 and 3 that are affected by track maintenance. Both the B and D train are rerouted to the 8th Avenue line, while the F and M trains will continue to operate on tracks 1 and 4 at reduced speed during the maintenance. Which of the following train routes are impacted by track maintenance at 4 AM?", choices: ["B", "B and D", "F", "F and M"], correct: 1, explanation: "At 4 AM, both B and D trains are rerouted." },
  { id: 146, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "sevenTrain", q: "Conductor James is performing platform duties at Times Square. A passenger asks him when the 7 train is due to arrive at Times Square station. The time is 1:15. What time does the next 7 train arrive?", choices: ["1:09", "1:15", "1:29", "1:36"], correct: 2, explanation: "At 1:15 PM, the next train arrives at Times Square at 1:29." },
  { id: 147, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "What street is the Empire State Building located?", choices: ["14th Street", "23rd Street", "34th Street", "57th Street"], correct: 2, explanation: "The Empire State Building is at 34th Street and Fifth Avenue." },
  { id: 148, category: "Route Knowledge", topics: ["Route Knowledge", "Official NYCTA Exam"], graphicKey: "trackDiagram", q: "If a train is travelling north on Track B after leaving Seneca Avenue station, what is the next station?", choices: ["Battery Park", "Brook Place", "Douglas Street", "Yukon Street"], correct: 3, explanation: "On Track B, after Seneca Avenue going north, the next station is Yukon Street." },
  { id: 149, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "What airport is located in the borough of Queens?", choices: ["MacArthur Airport", "Stewart International Airport", "John F. Kennedy International Airport", "Flushing Airport"], correct: 2, explanation: "JFK Airport is in Queens." },
  { id: 150, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], graphicKey: "hornSignals", q: "A passenger informs the conductor of a medical emergency on the train. What train horn or whistle should be given?", choices: ["TQ", "TQTQ", "TT", "T"], correct: 1, explanation: "TQTQ signals that the Train Crew needs Police Assistance." },
  { id: 151, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], graphicKey: "hornSignals", q: "Conductor Phelps sounds the T horn when her train is leaving a station. What situation below would be appropriate for this horn signal?", choices: ["Request for a route change", "A passenger is being dragged on the platform", "Train's air brakes unable to charge after repeated attempts", "A faulty train destination sign"], correct: 1, explanation: "T means 'Apply brakes immediately (STOP)' — appropriate when a passenger is being dragged." },
  { id: 152, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "Which of the following best summarizes the incident report?", passage: { title: "INCIDENT REPORT", text: "Location: Coney Island Yard on Track 5; Car No. 68679\nObservation: Inoperable train doors during a test\nDate and Time: November 6, 2018 at 1436 hours\nPerson Filing Report: Conductor Pass No. 43487\nOutcome: Requested a Car Inspector (CI) to the train for assistance." }, choices: ["On November 6, 2018 at 1436 hours, Conductor pass number 43487 conducted a test of the train's doors. The doors were determined to be inoperable and a CI was requested for assistance.", "On November 6, 2018 at 1346 hours, Conductor pass number 43487 conducted a test of the train's doors. The doors were determined to be inoperable and a CI was requested for assistance.", "On November 6, 2018 at 1436 hours, Conductor pass number 43487 conducted a test of the train's doors. The doors were determined to be inoperable in Train Car No. 68679 and a CI was requested for assistance.", "On November 6, 2018 at 1436 hours, Conductor pass number 43487 conducted a test of the train's doors. The doors were determined to be inoperable in Train Car No. 68679 on track 5 in the Coney Island Yard. A CI was requested for assistance."], correct: 3, explanation: "The best summary includes ALL key details." },
  { id: 153, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "A passenger informs a conductor of an unattended package on her train. Which of the following is the proper action to take?", passage: { title: "NYCT RTO Bulletin for Suspicious Packages", text: "All Train Service Employees must be alert for suspicious bags, packages or briefcases.\n\nEmployees who encounter a suspicious item:\n• Must immediately notify the Rail Control Center (RCC)\n• Must not move, open, tamper or touch a package\n• Must move away from a suspicious package and separate the area\n• Must wait for and follow the instructions from the NYPD and/or RCC\n\nIf on a train:\n• Proceed the train to the nearest station if between stations\n• Discharge passengers and make manual PA announcement\n• Advise customers of alternative routes\n• Follow instructions from NYPD and/or RCC" }, choices: ["Notify the train operator immediately", "Notify the NYPD immediately", "Locate the package and check its contents for anything suspicious", "Follow the instructions from the NYPD and/or RCC"], correct: 3, explanation: "Employees must wait for and follow instructions from the NYPD and/or RCC." },
  { id: 154, category: "Communication", topics: ["Communication", "Official NYCTA Exam", "Time & Schedule"], q: "Conductor Jenkins is informed of a stalled train that has delayed his train. An announcement is immediately made at 2:05 PM. The Conductor then makes another announcement at 2:12 PM. The actions of the Conductor are:", passage: { title: "DELAY ANNOUNCEMENTS PROCEDURE", text: "• The first delay announcement will be made immediately.\n• The train crew must identify themselves, give the reason for the delay, and give alternative routes.\n• A manual announcement must be made within two (2) minutes of the first announcement and then at a minimum of every five (5) minutes if a delay is not resolved." }, choices: ["Correct, he immediately makes his second announcement within seven minutes of the first announcement", "Correct, he makes the minimum required two announcements when a delay occurred", "Incorrect, he did not make the required second announcement at 2:10 PM", "Incorrect, he did not make the required second announcement at 2:07 PM"], correct: 3, explanation: "The second announcement must be made within 2 minutes of the first (by 2:07 PM)." },
  { id: 155, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "detergent", q: "The MAIN reason for the station department testing the new detergent in the first place was to make certain that:", choices: ["it was very simple to use", "a little bit would go a long way", "there was no stronger detergent on the market", "it was superior to anything formerly used"], correct: 3, explanation: "The main purpose of testing is to verify it is superior to what was formerly used." },
  { id: 156, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], passageKey: "detergent", q: "The MAIN reason that such a poor cleaning job resulted was MOST likely due to the:", choices: ["porters being lax on the job", "detergent not being as good as expected", "incorrect amount of water being mixed with the detergent", "fact that the surfaces cleaned needed to be scrubbed"], correct: 1, explanation: "The detergent was not as good as expected in real-world conditions." },
  { id: 157, category: "Route Knowledge", topics: ["Route Knowledge", "Official NYCTA Exam"], graphicKey: "m60Map", q: "Passengers can transfer to the M60 SBS route from all of the subway stations below EXCEPT:", choices: ["116 Street Columbia University Station on the 1 train line", "116 Street Station on the 1 train line", "125 Street Station on the A, B, C, D, 2, 3, 4, 5 and 6 train line", "125 Street Station on the 1 train line"], correct: 3, explanation: "Based on the map, the M60 SBS does not connect to 125 Street Station on the 1 train line." },
  { id: 158, category: "Route Knowledge", topics: ["Route Knowledge", "Official NYCTA Exam"], graphicKey: "m60Map", q: "A passenger takes the B train at 86 Street Station and she needs to continue her trip on the A train. Based on the map, what station can she transfer to the A train?", choices: ["110 Street-Cathedral Parkway", "125 Street", "135 Street", "Central Park North-110 Street"], correct: 1, explanation: "125 Street is a transfer point between the B and A trains." },
  { id: 159, category: "Table Interpretation", topics: ["Table Interpretation", "Official NYCTA Exam", "Time & Schedule"], graphicKey: "fourTrain", q: "What is the headway at Brooklyn Bridge station between the number 4 trains leaving Utica Avenue at 7:14 and 7:20?", choices: ["2 minutes", "3 minutes", "6 minutes", "7 minutes"], correct: 3, explanation: "Train at 7:14 arrives BB at 7:36. Train at 7:20 arrives BB at 7:43. Headway = 7 minutes." },
  { id: 160, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "A passenger gives you 3 one-dollar bills and asks for 1 fare. You should give the passenger 1 fare and _____ cents in change. (Assume fare is $2.50)", choices: ["50", "40", "20", "15"], correct: 0, explanation: "$3.00 - $2.50 = $0.50 = 50 cents." },
  { id: 161, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "If a passenger wants to get 4 fares without getting any change, he should give you EXACTLY: (Assume fare is $2.50)", choices: ["$5.50", "$7.50", "$8.00", "$10.00"], correct: 3, explanation: "4 × $2.50 = $10.00 exactly." },
  { id: 162, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "Conductor Nichols sees a passenger holding the train doors. He depresses the PA push button, observes it illuminate green, listens for the audible tone, waits two seconds, presses push to talk, and speaks: 'To the passenger in the second car, please do not hold the train doors open. Please release the doors so that the train can leave the station.' The actions of the conductor are:", passage: { title: "RAIL SERVICE ANNOUNCEMENT MEMO", text: "WHEN SOMEONE HOLDS THE DOORS:\n• Do not use the public address to speak directly to the passenger.\n• Make the below announcement: 'Passengers, please do not hold the train doors open. Please release the doors so that the train can leave the station.'" }, choices: ["Correct, he addressed directly to the passenger holding the train doors in a courteous manner", "Correct, he followed the proper procedures when making an onboard public address announcement and the correct announcement when someone holds the train doors", "Incorrect, he addressed the passenger directly instead of addressing the announcement to passengers", "Incorrect, he did not state, 'Stand clear please.'"], correct: 2, explanation: "The memo states: 'Do not use the public address to speak directly to the passenger.'" },
  { id: 163, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "Courtesy announcements are made to passengers when:", passage: { title: "RAIL SERVICE ANNOUNCEMENT MEMO", text: "COURTESY ANNOUNCEMENTS: Courtesy announcements are only made when service is on or close to schedule and only once or twice per hour." }, choices: ["trains are running behind schedule to calm passengers", "trains are running on or close to schedule", "they are made at least three times per hour", "a train is delayed in between stations"], correct: 1, explanation: "Courtesy announcements are only made when service is on or close to schedule." },
  { id: 164, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], q: "How would you convert the following military times to regular time? 0832 hrs., 1643 hrs., 0043 hrs.", choices: ["8:32 am., 6:43 pm., 4:30 am", "8:32 pm., 4:43 pm., 12:43 pm", "8:32 am., 4:43 pm., 12:43 am", "8:32 am., 4:43 pm., 1:43 am"], correct: 2, explanation: "0832 = 8:32 AM; 1643 = 4:43 PM; 0043 = 12:43 AM." },
  { id: 165, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], q: "If you woke up at half past five in the morning and went to bed at a quarter past ten at night, how would you write those times in military time?", choices: ["0550 hrs and 1015 hrs", "0530 hrs and 1015 pm", "0530 hrs and 2215 hrs", "530 hrs, and 2215 hrs"], correct: 2, explanation: "Half past five AM = 0530 hrs. Quarter past ten PM = 2215 hrs." },
  { id: 166, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], q: "Convert the following to military time: 2:13 am., 2:56 pm., 12:08 pm", choices: ["213 hrs., 256 hrs., 1208 hrs", "1413 hrs., 0256 hrs., 0008 hrs", "0213 hrs., 1456 hrs., 1208 hrs", "0213 hrs., 1456 hrs., 0008 hrs"], correct: 2, explanation: "2:13 AM = 0213; 2:56 PM = 1456; 12:08 PM = 1208." },
  { id: 167, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], q: "To change from Daylight Saving Time to Standard Time, the hands of the clock are moved:", choices: ["ahead in autumn", "back in autumn", "back in spring", "ahead in spring"], correct: 1, explanation: "Daylight Saving Time ends in autumn — 'fall back'." },
  { id: 168, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "On checking a pile of tickets arranged in numerical order, you find that the next ticket after number 17,474 is number 17,747. The number of tickets missing is:", choices: ["171", "272", "373", "474"], correct: 1, explanation: "17,747 - 17,474 = 273. Minus 1 = 272 tickets missing." },
  { id: 169, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "The subway station which is NEAREST to Madison Square Garden is:", choices: ["50th St. on the 8th Ave. Local", "59th St. on the Broadway-7th Ave.", "49th St. on the Brighton Line", "50th St. on the 6th Ave. Express"], correct: 0, explanation: "Madison Square Garden is at Penn Station; 50th St. on the 8th Ave. Local is closest." },
  { id: 170, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "In making a report concerning an accident which took place on a stairway from the mezzanine to the train platform at a subway station, the LEAST important item to include is the:", choices: ["time of day", "date", "number of step", "weather"], correct: 2, explanation: "The number of the step is the least important item." },
  { id: 171, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "It had been suggested that the $2.75 fares used for rides on the subway should be sold in packages. Under such a plan, the LARGEST saving to the riders would be if the fares were sold for:", choices: ["2 for $5.25", "3 for $8.00", "5 for $13.50", "7 for $19.00"], correct: 3, explanation: "7 for $19.00 gives the largest total package discount." },
  { id: 172, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "The Port of New York Authority constructed a bus terminal at:", choices: ["179th St. and Broadway", "Grand Central Station", "Erie Basin", "34th St. and 7th Ave."], correct: 0, explanation: "The Port Authority bus terminal is at 179th St. and Broadway." },
  { id: 173, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "If a passenger asks you how to reach a certain destination with which you are not acquainted, your BEST procedure would be to:", choices: ["tell him you do not know", "look it up if possible", "tell him to ask some passenger", "call the police precinct"], correct: 0, explanation: "Tell the passenger you do not know rather than guess." },
  { id: 174, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "Members of the city police and fire departments, when in uniform or upon presentation of their badges, will be carried free on the transit system. The reason for this is that:", choices: ["they are easy to identify", "they are city employees", "their rate of pay is low", "they travel a considerable amount on official business"], correct: 3, explanation: "Police and fire personnel travel considerably on official business." },
  { id: 175, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "If an ambulance is required for an injured passenger, all subway employees, including Train operator or conductor, are instructed to call the Control operational unit and have them call the ambulance. An IMPORTANT reason for such a procedure is to:", choices: ["enable the clerk to concentrate on his regular duties", "provide faster service", "fix responsibility", "avoid possible duplication of calls"], correct: 1, explanation: "Having Control call provides faster service." },
  { id: 176, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "It is simple logic that the reason every stairway in a subway station has a number is to:", choices: ["guide passengers", "simplify reporting", "avoid duplication", "show which street it is near"], correct: 1, explanation: "Numbering stairways simplifies reporting." },
  { id: 177, category: "Signal Indications", topics: ["Signal Indications", "Official NYCTA Exam"], q: "The color of the signal used in the subway to show the train operator he has a clear track is:", choices: ["red", "orange", "blue", "green"], correct: 3, explanation: "Green signals indicate a clear track." },
  { id: 178, category: "Route Knowledge", topics: ["Route Knowledge", "Official NYCTA Exam"], q: "The maps which are displayed at subway stations do NOT show:", choices: ["how far it is from one station to the next", "which stations are express stops", "which lines are IND, BMT, or IRT", "where there are transfer points"], correct: 0, explanation: "Subway maps don't show physical distances between stations." },
  { id: 179, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "A passenger asks for two fares and hands the Station Agent $5.00. If fares cost $2 each, the SMALLEST number of bills the passenger can be given in change is:", choices: ["0", "1", "2", "3"], correct: 1, explanation: "$5.00 - $4.00 = $1.00 change = 1 one-dollar bill." },
  { id: 180, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "When a passenger reports a stuck turnstile, the Station Agent should telephone the:", choices: ["Superintendent", "Authority", "Transit Police Bureau", "Station Department"], correct: 3, explanation: "Station Agents 'will telephone the Station Department immediately'." },
  { id: 181, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "The TOTAL number of times that the title 'Station Agents' appears in the entire bulletin is:", choices: ["3", "4", "5", "6"], correct: 1, explanation: "'Station Agents' appears 4 times in the bulletin." },
  { id: 182, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "When a passenger reports that a Metrocard is stuck in a turnstile, the Station Agent should:", choices: ["notify the Transit Police immediately", "tell the passenger to look for a gateman", "lock his booth and inspect the turnstile", "take the passenger's name and address"], correct: 3, explanation: "Take the passenger's name and address without leaving the booth." },
  { id: 183, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "A passenger who properly reports the loss of a token in a plugged turnstile will PROBABLY be reimbursed through a(the):", choices: ["special messenger", "Station Agent", "gateman", "regular mail"], correct: 3, explanation: "Reimbursement would likely come through regular mail." },
  { id: 184, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "Retrieving tokens, as used in this bulletin, MOST probably means:", choices: ["taking out fares which have been deposited in turnstiles", "picking up fares which have dropped to the floor", "paying out cash for fares returned by passengers", "counting the number of fares sold since the previous count"], correct: 0, explanation: "'Retrieving tokens' refers to removing fares deposited in turnstiles." },
  { id: 185, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], passageKey: "bulletin9", q: "If Station Agents at a certain location work in three consecutive 8-hour tours to cover the 24 hours in a day and the A.M. tour finishes at 3:00 P.M., the hours one would work for the midnight tour are MOST likely:", choices: ["12:00 midnight; 8:00 A.M.", "11:00 P.M.; 7:00 A.M.", "10:00 P.M.; 6:00 A.M.", "9:00 P.M.; 5:00 A.M."], correct: 1, explanation: "AM (7AM-3PM), PM (3PM-11PM), Midnight (11PM-7AM)." },
  { id: 186, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], passageKey: "bulletin9", q: "If Bulletin Order No. 1 was issued on January 2, bulletins are being issued at the rate of:", choices: ["one a day", "one a week", "one every two days", "two a week"], correct: 2, explanation: "From Jan 2 to Jan 19 = 17 days for 9 bulletins ≈ one every two days." },
  { id: 187, category: "Operating Rules", topics: ["Operating Rules", "Official NYCTA Exam"], passageKey: "bulletin9", q: "From the statements in this bulletin, it is clear that there MUST be:", choices: ["gatemen on duty at every change booth", "telephones in all change booths", "suspicious characters around every station", "platformmen always on duty"], correct: 1, explanation: "Since Station Agents must telephone without leaving the booth, there must be telephones in all booths." },
  { id: 188, category: "Communication", topics: ["Communication", "Official NYCTA Exam"], q: "If your supervisor tells you and another Station Agent to do something and you do not fully understand the order, it would be BEST for you to:", choices: ["discuss the order with the other Station Agent to decide what was meant", "ask your supervisor to put the order in writing", "keep quiet and use your own best judgment", "ask your supervisor for a further explanation"], correct: 3, explanation: "Ask the supervisor for further explanation." },
  { id: 189, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "The MAIN reason that the edges of the top steps on many stairways in the subway are painted yellow is to:", choices: ["show up the dirt", "make them less slippery", "make them more attractive", "make them stand out"], correct: 3, explanation: "Yellow paint makes the step edges stand out as a warning." },
  { id: 190, category: "Time & Schedule", topics: ["Time & Schedule", "Official NYCTA Exam"], q: "To change from Standard Time to Daylight Savings Time, the hands of the clock are moved:", choices: ["ahead in spring", "ahead in autumn", "back in spring", "back in autumn"], correct: 0, explanation: "Daylight Saving Time begins in spring — 'spring forward'." },
  { id: 191, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "The Transit Authority permits the posting of advertisements in subway cars because:", choices: ["it promotes safety", "passengers like to read the ads", "it improves the interior appearance of the cars", "advertisers pay for this privilege"], correct: 3, explanation: "Advertisers pay for this privilege, generating revenue." },
  { id: 192, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "A passenger tendered $2.10 in payment for a two-dollar fare and received one coin in change. The change consisted of:", choices: ["one dime", "three nickels", "a quarter and a nickel", "a quarter and a dime"], correct: 0, explanation: "$2.10 - $2.00 = $0.10 = one dime." },
  { id: 193, category: "Route Knowledge", topics: ["Route Knowledge", "Official NYCTA Exam"], q: "One subway line which does NOT run north and south anywhere in Manhattan is the:", choices: ["Broadway Line", "42nd Street shuttle", "8th Avenue Line", "Lexington line"], correct: 1, explanation: "The 42nd Street shuttle runs east-west." },
  { id: 194, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "On checking a pile of tickets arranged in numerical order, you find that the next ticket after number 21,986 is number 22,008. The number of tickets missing is:", choices: ["11", "12", "21", "32"], correct: 2, explanation: "22,008 - 21,986 = 22. Minus 1 = 21 tickets missing." },
  { id: 195, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "If a passenger tells a Conductor that he lost an umbrella in the subway on the preceding day, the passenger should be advised to inquire about it at the:", choices: ["porter's room", "Transit Authority Lost Property Office", "newsstand", "local police headquarters"], correct: 1, explanation: "Lost items should be inquired about at the Transit Authority Lost Property Office." },
  { id: 196, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "Bellevue Hospital is located NEAREST to:", choices: ["South Ferry", "Radio City", "City Hall", "Stuyvesant Square"], correct: 3, explanation: "Bellevue Hospital is near Stuyvesant Square." },
  { id: 197, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "Of the following, the BEST way to have transit employees, as a whole, learn good safety habits is to:", choices: ["penalize them with loss of pay for lost-time accidents", "have them read the rules in their spare time", "offer prizes for the best safety records", "let them learn through their own mistakes"], correct: 2, explanation: "Offering prizes provides positive reinforcement." },
  { id: 198, category: "General Knowledge", topics: ["General Knowledge", "Official NYCTA Exam"], q: "A passenger may recover a lost article which has been found and turned over to the lost and found department by:", choices: ["proving undisputed title to it", "properly identifying it", "paying the storage charges", "simply asking for it"], correct: 1, explanation: "A passenger must properly identify the lost item." },
  { id: 199, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "The Brooklyn Bridge Station of the Lexington Ave. Line is located NEAREST to:", choices: ["City Hall", "Brooklyn Borough Hall", "the Custom House", "the Navy Yard"], correct: 0, explanation: "The Brooklyn Bridge station on the Lexington Ave. Line is nearest to City Hall." },
  { id: 200, category: "Locations", topics: ["Locations", "Official NYCTA Exam"], q: "The subway line which has a station NEAREST to Queensboro Bridge Plaza is the:", choices: ["4th Avenue Line", "Lexington Avenue Line", "6th Avenue Line", "8th Avenue Line"], correct: 0, explanation: "The 4th Avenue Line has a station nearest to Queensboro Bridge Plaza." },
  { id: 201, category: "Safety & Emergency", topics: ["Safety & Emergency", "Official NYCTA Exam"], q: "Safety programs are conducted throughout the transit system. The MAIN purpose of these programs is to:", choices: ["eliminate accidents", "encourage cooperation among employees", "improve system efficiency", "produce a faster schedule"], correct: 0, explanation: "The main purpose of safety programs is to eliminate accidents." },
  { id: 202, category: "Signal Indications", topics: ["Signal Indications"], q: "A signal displaying 'Red over Green' typically indicates:", choices: ["Stop", "Proceed at restricted speed", "Clear — proceed at authorized speed", "Approach next signal"], correct: 2, explanation: "Red over Green is a 'Clear' indication." },
  { id: 203, category: "Signal Indications", topics: ["Signal Indications"], q: "A 'lunar white' signal aspect typically indicates:", choices: ["Stop", "Clear", "Call on — proceed at restricted speed past stop signal", "Approach"], correct: 2, explanation: "Lunar white is a 'Call On' indication." },
  { id: 204, category: "Signal Indications", topics: ["Signal Indications"], q: "When two yellow aspects are displayed vertically, this indicates:", choices: ["Clear", "Approach diverging", "Stop", "Restricted speed"], correct: 1, explanation: "Two yellows indicate 'Approach Diverging'." },
  { id: 205, category: "Signal Indications", topics: ["Signal Indications"], q: "A signal with a number plate showing 'A' typically indicates:", choices: ["Absolute signal", "Automatic signal", "Approach signal", "Auxiliary signal"], correct: 0, explanation: "An 'A' plate indicates an absolute signal." },
  { id: 206, category: "Signal Indications", topics: ["Signal Indications"], q: "A signal with a number plate showing 'P' or 'R' indicates:", choices: ["Absolute signal", "Permissive or automatic signal", "Approach signal", "Restricted signal"], correct: 1, explanation: "A 'P' or 'R' plate indicates a permissive/automatic signal." },
  { id: 207, category: "Signal Indications", topics: ["Signal Indications"], q: "A flashing RED signal typically indicates:", choices: ["Stop and proceed immediately", "Stop — absolute", "Call on — proceed at restricted speed after stopping", "Approach"], correct: 2, explanation: "A flashing red is a 'Call On' indication." },
  { id: 208, category: "Signal Indications", topics: ["Signal Indications"], q: "The aspect 'Yellow over Green' typically indicates:", choices: ["Clear", "Approach diverging — proceed prepared to take diverging route at next signal", "Stop", "Restricted speed"], correct: 1, explanation: "Yellow over Green indicates 'Approach Diverging'." },
  { id: 209, category: "Signal Indications", topics: ["Signal Indications"], q: "A 'G' plate on a signal indicates:", choices: ["Grade time signaling is in effect", "Green signal", "Go ahead", "Grade crossing"], correct: 0, explanation: "A 'G' plate indicates grade time signaling." },
  { id: 210, category: "Signal Indications", topics: ["Signal Indications"], q: "The maximum speed through a diverging route indicated by an 'Approach Diverging' aspect is typically:", choices: ["15 MPH", "25 MPH", "45 MPH", "60 MPH"], correct: 1, explanation: "Typical maximum speed through a diverging route is 25 MPH." },
  { id: 211, category: "Operating Rules", topics: ["Operating Rules"], q: "A 'permissive signal' may be passed after stopping when displaying:", choices: ["Green", "Yellow", "Red", "Flashing yellow"], correct: 2, explanation: "A permissive signal displaying red may be passed after stopping." },
  { id: 212, category: "Operating Rules", topics: ["Operating Rules"], q: "When operating under 'Rule 251' (direction of traffic), trains must operate:", choices: ["In either direction", "On the right-hand track in the direction indicated by signals", "On the left-hand track", "At restricted speed only"], correct: 1, explanation: "Rule 251 requires trains to operate on the right-hand track." },
  { id: 213, category: "Operating Rules", topics: ["Operating Rules"], q: "A 'Form B' track warrant permits a train to:", choices: ["Operate against the current of traffic", "Occupy a specific track between specified points", "Work on the track", "Test signals"], correct: 1, explanation: "A Form B track warrant permits a train to occupy a specific track." },
  { id: 214, category: "Operating Rules", topics: ["Operating Rules"], q: "Before entering a block governed by an absolute signal displaying 'Stop', the train must:", choices: ["Sound the horn", "Stop and contact the dispatcher for authority to proceed", "Proceed at restricted speed", "Wait 5 minutes"], correct: 1, explanation: "An absolute signal at stop requires the train to stop and contact the dispatcher." },
  { id: 215, category: "Operating Rules", topics: ["Operating Rules"], q: "When a train is operating 'against the current of traffic', it must:", choices: ["Proceed at normal speed", "Have explicit authority and proceed at restricted speed", "Sound the horn continuously", "Travel without signals"], correct: 1, explanation: "Trains operating against the current of traffic must have explicit authority and proceed at restricted speed." },
];

// ============ STATE ============
let currentTab = 'home';
let quizState = null;
let lastQuizConfig = { category: 'mixed', count: 10 };
let notes = {};
let stats = { totalAttempts: 0, correctAnswers: 0, currentStreak: 0, bestStreak: 0, categoryStats: {}, sessions: [] };
let noteEditorQId = null;
let customQuizSelected = [];
let reviewFilter = 'All';

// ============ INIT ============
function init() {
  CATEGORIES.forEach(c => c.count = QUESTIONS.filter(q => q.category === c.name).length);
  
  // Load saved data
  const savedNotes = localStorage.getItem('mta_notes');
  if (savedNotes) notes = JSON.parse(savedNotes);
  const savedStats = localStorage.getItem('mta_stats');
  if (savedStats) stats = JSON.parse(savedStats);

  // Setup tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  renderHome();
  renderQuizCategoryPick();
  renderReview();
  renderNotesView();
  renderStats();
}

function saveNotes() { localStorage.setItem('mta_notes', JSON.stringify(notes)); }
function saveStats() { localStorage.setItem('mta_stats', JSON.stringify(stats)); }

// ============ TAB SWITCHING ============
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('tab-active');
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`view-${tab}`).classList.remove('hidden');
  if (tab === 'home') renderHome();
  if (tab === 'review') renderReview();
  if (tab === 'notes') renderNotesView();
  if (tab === 'stats') renderStats();
}

// ============ HOME VIEW ============
function renderHome() {
  const total = QUESTIONS.length;
  const correct = stats.correctAnswers;
  const accuracy = stats.totalAttempts > 0 ? Math.round((stats.correctAnswers / stats.totalAttempts) * 100) : 0;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-accuracy').textContent = accuracy + '%';
  document.getElementById('stat-streak').textContent = stats.currentStreak + ' 🔥';

  const grid = document.getElementById('category-grid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const catQs = QUESTIONS.filter(q => q.category === cat.name);
    const attempted = catQs.filter(q => stats.categoryStats[cat.name]?.attempts > 0).length;
    const correctCount = catQs.filter(q => {
      const cs = stats.categoryStats[cat.name];
      return cs && cs.correct > 0;
    }).length;
    const catAcc = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0;
    const progress = attempted > 0 ? Math.round((attempted / catQs.length) * 100) : 0;
    return `<div class="mta-card rounded-2xl p-5 cursor-pointer" onclick="startQuiz('${cat.name}', 0)">
      <div class="flex items-center justify-between mb-3"><span class="text-3xl">${cat.icon}</span><span class="text-xs bg-blue-50 text-[#0039A6] px-2 py-1 rounded-full font-semibold">${cat.count} Qs</span></div>
      <h4 class="font-bold text-gray-800 mb-1">${cat.name}</h4>
      <p class="text-xs text-gray-500 mb-3">${attempted} attempted • ${catAcc}% accuracy</p>
      <div class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden"><div class="bg-[#0039A6] h-1.5 rounded-full transition-all" style="width:${progress}%"></div></div>
    </div>`;
  }).join('');
}

function renderQuizCategoryPick() {
  const el = document.getElementById('quiz-category-pick');
  el.innerHTML = CATEGORIES.map(c => `<button class="category-chip px-3 py-1.5 rounded-full text-sm font-medium" onclick="startQuiz('${c.name}', 0)">${c.icon} ${c.name}</button>`).join('');
}

// ============ QUIZ ============
function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function startQuiz(category, count) {
  let filtered;
  if (category === 'mixed') {
    filtered = shuffle(QUESTIONS);
    if (count > 0) filtered = filtered.slice(0, count);
  } else {
    filtered = shuffle(QUESTIONS.filter(q => q.category === category));
  }
  lastQuizConfig = { category, count };
  quizState = { questions: filtered, currentIndex: 0, answers: {}, selectedChoice: null, submitted: false, startTime: Date.now(), config: { category, count } };
  switchTab('quiz');
  document.getElementById('quiz-empty').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  renderQuizQuestion();
}

function exitQuiz() { quizState = null; switchTab('home'); }

function renderQuizQuestion() {
  if (!quizState) return;
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const idx = quizState.currentIndex;

  document.getElementById('quiz-subtitle').textContent = `${quizState.config.category} • ${total} questions`;
  document.getElementById('progress-label').textContent = `Question ${idx + 1} of ${total}`;
  const pct = Math.round(((idx + 1) / total) * 100);
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-bar').style.width = pct + '%';

  // Question card
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-number').textContent = '#' + q.id;
  document.getElementById('q-topics').innerHTML = q.topics.map(t => `<span class="topic-tag ${t === 'Official NYCTA Exam' ? 'official' : ''}">${t}</span>`).join(' ');
  document.getElementById('q-note-btn-label').textContent = notes[q.id] ? 'Edit Note' : 'Add Note';

  // Note display
  const noteDisplay = document.getElementById('current-note-display');
  if (notes[q.id]) {
    noteDisplay.classList.remove('hidden');
    document.getElementById('current-note-text').textContent = notes[q.id].text;
  } else {
    noteDisplay.classList.add('hidden');
  }

  // Passage
  const passageContainer = document.getElementById('passage-container');
  const passage = q.passage || (q.passageKey ? SHARED_PASSAGES[q.passageKey] : null);
  if (passage) {
    passageContainer.classList.remove('hidden');
    passageContainer.innerHTML = `<span class="shared-passage-indicator">📄 Shared Passage: ${passage.title}</span><div class="passage-box"><p class="passage-title">${passage.title}</p><p class="whitespace-pre-wrap">${passage.text}</p></div>`;
  } else {
    passageContainer.classList.add('hidden');
    passageContainer.innerHTML = '';
  }

  // Graphic
  const graphicContainer = document.getElementById('graphic-container');
  if (q.graphicKey && GRAPHICS[q.graphicKey]) {
    graphicContainer.classList.remove('hidden');
    graphicContainer.innerHTML = `<div class="graphic-box">${GRAPHICS[q.graphicKey]}</div>`;
  } else {
    graphicContainer.classList.add('hidden');
    graphicContainer.innerHTML = '';
  }

  // Table
  const tableSlot = document.getElementById('inline-table-slot');
  if (q.table) {
    tableSlot.innerHTML = `<div class="graphic-box mb-6"><span class="graphic-caption">${q.table.caption}</span><div class="tt-wrap"><table class="tt"><thead><tr>${q.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${q.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  } else {
    tableSlot.innerHTML = '';
  }

  // Question text
  document.getElementById('q-text').textContent = q.q;

  // Choices
  const choicesEl = document.getElementById('choices');
  choicesEl.innerHTML = q.choices.map((c, i) => {
    let cls = 'choice-btn w-full block';
    if (quizState.submitted) {
      if (i === q.correct) cls += ' correct';
      else if (i === quizState.answers[q.id]?.selected && !quizState.answers[q.id]?.correct) cls += ' wrong';
    } else if (quizState.selectedChoice === i) {
      cls += ' selected';
    }
    return `<button class="${cls}" ${quizState.submitted ? 'disabled' : ''} onclick="selectChoice(${i})"><span class="font-semibold mr-2">${String.fromCharCode(65 + i)}.</span> ${c}</button>`;
  }).join('');

  // Feedback
  const feedbackEl = document.getElementById('feedback');
  if (quizState.submitted) {
    const isCorrect = quizState.answers[q.id]?.correct;
    feedbackEl.classList.remove('hidden');
    feedbackEl.className = `rounded-2xl p-5 mb-4 border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`;
    feedbackEl.innerHTML = `<p class="font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}">${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</p><p class="text-sm text-gray-700">${q.explanation}</p>`;
  } else {
    feedbackEl.classList.add('hidden');
  }

  // Buttons
  document.getElementById('btn-submit').disabled = quizState.selectedChoice === null || quizState.submitted;
  document.getElementById('btn-submit').classList.toggle('hidden', quizState.submitted);
  document.getElementById('btn-next').classList.toggle('hidden', !quizState.submitted || idx === total - 1);
  document.getElementById('btn-finish').classList.toggle('hidden', !quizState.submitted || idx !== total - 1);
  document.getElementById('btn-prev').disabled = idx === 0;

  // Nav grid
  renderQuizNav();
}

function renderQuizNav() {
  if (!quizState) return;
  const grid = document.getElementById('q-nav-grid');
  grid.innerHTML = quizState.questions.map((q, i) => {
    const answer = quizState.answers[q.id];
    const hasNote = notes[q.id];
    const isCurrent = i === quizState.currentIndex;
    let cls = 'q-nav-btn';
    if (answer?.correct) cls += ' answered-correct';
    else if (answer && !answer.correct) cls += ' answered-wrong';
    if (isCurrent) cls += ' current';
    if (hasNote) cls += ' has-note';
    const tooltip = hasNote ? ` data-tooltip="📝 ${hasNote.text}"` : '';
    return `<button class="${cls}"${tooltip} onclick="jumpToIndex(${i})" oncontextmenu="event.preventDefault(); openNoteEditor(${q.id})">${i + 1}</button>`;
  }).join('');
}

function selectChoice(i) { if (quizState && !quizState.submitted) { quizState.selectedChoice = i; renderQuizQuestion(); } }

function submitAnswer() {
  if (!quizState || quizState.selectedChoice === null) return;
  const q = quizState.questions[quizState.currentIndex];
  const isCorrect = quizState.selectedChoice === q.correct;
  quizState.answers[q.id] = { selected: quizState.selectedChoice, correct: isCorrect };
  quizState.submitted = true;

  stats.totalAttempts++;
  if (isCorrect) { stats.correctAnswers++; stats.currentStreak++; if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak; }
  else stats.currentStreak = 0;
  if (!stats.categoryStats[q.category]) stats.categoryStats[q.category] = { attempts: 0, correct: 0 };
  stats.categoryStats[q.category].attempts++;
  if (isCorrect) stats.categoryStats[q.category].correct++;
  saveStats();
  renderQuizQuestion();
}

function nextQuestion() { if (quizState && quizState.currentIndex < quizState.questions.length - 1) { quizState.currentIndex++; const prevA = quizState.answers[quizState.questions[quizState.currentIndex].id]; quizState.selectedChoice = prevA ? prevA.selected : null; quizState.submitted = !!prevA; renderQuizQuestion(); } }
function prevQuestion() { if (quizState && quizState.currentIndex > 0) { quizState.currentIndex--; const prevA = quizState.answers[quizState.questions[quizState.currentIndex].id]; quizState.selectedChoice = prevA ? prevA.selected : null; quizState.submitted = !!prevA; renderQuizQuestion(); } }
function jumpToIndex(i) { if (!quizState || i < 0 || i >= quizState.questions.length) return; quizState.currentIndex = i; const prevA = quizState.answers[quizState.questions[i].id]; quizState.selectedChoice = prevA ? prevA.selected : null; quizState.submitted = !!prevA; renderQuizQuestion(); }
function jumpToQuestion() { const val = parseInt(document.getElementById('jump-input').value); if (val) jumpToIndex(val - 1); }

function finishQuiz() {
  if (!quizState) return;
  const correct = Object.values(quizState.answers).filter(a => a.correct).length;
  const total = quizState.questions.length;
  const elapsed = Math.floor((Date.now() - quizState.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const pct = Math.round((correct / total) * 100);

  stats.sessions = [{ date: new Date().toLocaleDateString(), score: correct, total, accuracy: pct }, ...stats.sessions].slice(0, 10);
  saveStats();

  document.getElementById('results-icon').textContent = pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚';
  document.getElementById('r-score').textContent = `${correct}/${total}`;
  document.getElementById('r-accuracy').textContent = pct + '%';
  document.getElementById('r-time').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('results-modal').classList.remove('hidden');
}
function closeResults() { document.getElementById('results-modal').classList.add('hidden'); }

// ============ CUSTOM QUIZ ============
function openCustomQuizModal() {
  customQuizSelected = [];
  renderCustomQuizModal();
  document.getElementById('custom-quiz-modal').classList.remove('hidden');
}
function closeCustomQuizModal() { document.getElementById('custom-quiz-modal').classList.add('hidden'); }
function selectAllCategories(val) { customQuizSelected = val ? CATEGORIES.map(c => c.name) : []; renderCustomQuizModal(); }
function toggleCustomCat(name) { if (customQuizSelected.includes(name)) customQuizSelected = customQuizSelected.filter(c => c !== name); else customQuizSelected.push(name); renderCustomQuizModal(); }
function renderCustomQuizModal() {
  const el = document.getElementById('custom-quiz-categories');
  el.innerHTML = CATEGORIES.map(c => `<div class="cat-checkbox-card mta-card rounded-xl p-3 flex items-center gap-3 ${customQuizSelected.includes(c.name) ? 'selected' : ''}" onclick="toggleCustomCat('${c.name}')"><div class="cat-check"></div><span class="text-xl">${c.icon}</span><div class="flex-1"><p class="font-semibold text-sm text-gray-800">${c.name}</p><p class="text-xs text-gray-500">${c.count} questions</p></div></div>`).join('');
  const totalQs = QUESTIONS.filter(q => customQuizSelected.includes(q.category)).length;
  document.getElementById('custom-quiz-total').textContent = totalQs;
  document.getElementById('custom-quiz-cats').textContent = customQuizSelected.length;
  document.getElementById('start-custom-quiz-btn').disabled = customQuizSelected.length === 0;
}
function startCustomQuiz() {
  const filtered = shuffle(QUESTIONS.filter(q => customQuizSelected.includes(q.category)));
  if (filtered.length === 0) return;
  closeCustomQuizModal();
  lastQuizConfig = { category: customQuizSelected.join(', '), count: filtered.length };
  quizState = { questions: filtered, currentIndex: 0, answers: {}, selectedChoice: null, submitted: false, startTime: Date.now(), config: lastQuizConfig };
  switchTab('quiz');
  document.getElementById('quiz-empty').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  renderQuizQuestion();
}

// ============ NOTES ============
function openNoteEditor(qId) { noteEditorQId = qId; const q = QUESTIONS.find(x => x.id === qId); document.getElementById('note-editor-title').textContent = notes[qId] ? 'Edit Note' : 'Add Note'; document.getElementById('note-editor-subtitle').textContent = 'Question #' + qId; document.getElementById('note-editor-question').textContent = q ? q.q : ''; document.getElementById('note-editor-textarea').value = notes[qId]?.text || ''; document.getElementById('note-delete-btn').classList.toggle('hidden', !notes[qId]); document.getElementById('note-editor-modal').classList.remove('hidden'); }
function openNoteEditorForCurrent() { if (quizState) openNoteEditor(quizState.questions[quizState.currentIndex].id); }
function closeNoteEditor() { document.getElementById('note-editor-modal').classList.add('hidden'); noteEditorQId = null; }
function saveCurrentNote() {
  if (noteEditorQId === null) return;
  const text = document.getElementById('note-editor-textarea').value;
  const q = QUESTIONS.find(x => x.id === noteEditorQId);
  if (!text.trim()) { delete notes[noteEditorQId]; }
  else { notes[noteEditorQId] = { questionId: noteEditorQId, text, timestamp: Date.now(), category: q?.category || '' }; }
  saveNotes(); closeNoteEditor();
  if (quizState) renderQuizQuestion();
  renderNotesView();
}
function deleteCurrentNote() { if (noteEditorQId !== null) { delete notes[noteEditorQId]; saveNotes(); closeNoteEditor(); if (quizState) renderQuizQuestion(); renderNotesView(); } }
function exportNotes() {
  const text = Object.values(notes).map(n => { const q = QUESTIONS.find(x => x.id === n.questionId); return `Q#${n.questionId} (${n.category}): ${q?.q}\nNote: ${n.text}\n`; }).join('\n---\n\n');
  const blob = new Blob([text], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'mta-notes.txt'; a.click(); URL.revokeObjectURL(url);
}
function clearAllNotes() { if (confirm('Clear all notes?')) { notes = {}; saveNotes(); renderNotesView(); if (quizState) renderQuizQuestion(); } }

function renderNotesView() {
  const search = document.getElementById('notes-search')?.value?.toLowerCase() || '';
  const noteArr = Object.values(notes).filter(n => !search || n.text.toLowerCase().includes(search) || QUESTIONS.find(q => q.id === n.questionId)?.q.toLowerCase().includes(search));
  
  document.getElementById('notes-total').textContent = Object.keys(notes).length;
  document.getElementById('notes-categories').textContent = new Set(Object.values(notes).map(n => n.category)).size;
  document.getElementById('notes-last-updated').textContent = Object.values(notes).length > 0 ? new Date(Math.max(...Object.values(notes).map(n => n.timestamp))).toLocaleDateString() : '—';

  const filtersEl = document.getElementById('notes-filters');
  const cats = [...new Set(Object.values(notes).map(n => n.category))];
  filtersEl.innerHTML = `<button class="category-chip px-3 py-1.5 rounded-full text-sm font-medium ${notesFilterCat === 'All' ? 'active' : ''}" onclick="setNotesFilter('All')">All</button>` + cats.map(c => `<button class="category-chip px-3 py-1.5 rounded-full text-sm font-medium ${notesFilterCat === c ? 'active' : ''}" onclick="setNotesFilter('${c}')">${c}</button>`).join('');

  const listEl = document.getElementById('notes-list');
  const filtered = noteArr.filter(n => notesFilterCat === 'All' || n.category === notesFilterCat).sort((a, b) => b.timestamp - a.timestamp);
  if (filtered.length === 0) { listEl.innerHTML = '<div class="text-center py-12 text-gray-500"><div class="text-4xl mb-3">📝</div><p>No notes yet. Right-click any question in the quiz or review to add a note.</p></div>'; return; }
  listEl.innerHTML = filtered.map(n => {
    const q = QUESTIONS.find(x => x.id === n.questionId);
    return `<div class="note-item mta-card rounded-xl p-4"><div class="flex items-start justify-between gap-3"><div class="flex-1"><div class="flex items-center gap-2 mb-1"><span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-[#0039A6]">${n.category}</span><span class="text-xs text-gray-500">Q#${n.questionId}</span><span class="text-xs text-gray-400">${new Date(n.timestamp).toLocaleDateString()}</span></div>${q ? `<p class="text-sm text-gray-700 mb-2 line-clamp-2">${q.q}</p>` : ''}<p class="text-sm text-amber-900 whitespace-pre-wrap">${n.text}</p></div><div class="flex gap-1"><button onclick="openNoteEditor(${n.questionId})" class="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800 hover:bg-amber-200">Edit</button><button onclick="deleteNoteById(${n.questionId})" class="text-xs px-2 py-1 rounded bg-red-100 text-red-800 hover:bg-red-200">Delete</button></div></div></div>`;
  }).join('');
}
let notesFilterCat = 'All';
function setNotesFilter(cat) { notesFilterCat = cat; renderNotesView(); }
function deleteNoteById(qId) { delete notes[qId]; saveNotes(); renderNotesView(); if (quizState) renderQuizQuestion(); }

// ============ REVIEW ============
function renderReview() {
  const navGrid = document.getElementById('review-nav-grid');
  document.getElementById('review-nav-count').textContent = `(${QUESTIONS.length})`;
  navGrid.innerHTML = QUESTIONS.map((q, i) => {
    const hasNote = notes[q.id];
    let cls = 'q-nav-btn';
    if (hasNote) cls += ' has-note';
    const tooltip = hasNote ? ` data-tooltip="📝 ${hasNote.text}"` : '';
    return `<button class="${cls}"${tooltip} onclick="scrollToReviewQ(${q.id})" oncontextmenu="event.preventDefault(); openNoteEditor(${q.id})">${i + 1}</button>`;
  }).join('');

  const filtersEl = document.getElementById('review-filters');
  filtersEl.innerHTML = `<button class="category-chip px-3 py-1.5 rounded-full text-sm font-medium ${reviewFilter === 'All' ? 'active' : ''}" onclick="setReviewFilter('All')">All</button>` + CATEGORIES.map(c => `<button class="category-chip px-3 py-1.5 rounded-full text-sm font-medium ${reviewFilter === c.name ? 'active' : ''}" onclick="setReviewFilter('${c.name}')">${c.icon} ${c.name}</button>`).join('');

  const listEl = document.getElementById('review-list');
  const filtered = QUESTIONS.filter(q => reviewFilter === 'All' || q.category === reviewFilter);
  listEl.innerHTML = filtered.map(q => {
    let content = '';
    if (q.passageKey) content += `<span class="shared-passage-indicator">📄 Shared Passage</span>`;
    const passage = q.passage || (q.passageKey ? SHARED_PASSAGES[q.passageKey] : null);
    if (passage) content += `<div class="passage-box"><p class="passage-title">${passage.title}</p><p class="whitespace-pre-wrap">${passage.text}</p></div>`;
    if (q.graphicKey && GRAPHICS[q.graphicKey]) content += `<div class="graphic-box">${GRAPHICS[q.graphicKey]}</div>`;
    if (q.table) content += `<div class="graphic-box mb-6"><span class="graphic-caption">${q.table.caption}</span><div class="tt-wrap"><table class="tt"><thead><tr>${q.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${q.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    
    return `<div id="review-q-${q.id}" class="mta-card rounded-2xl p-5">
      <div class="flex items-start gap-3 mb-3 flex-wrap"><span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#0039A6]">${q.category}</span><span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">#${q.id}</span><span class="flex flex-wrap gap-1">${q.topics.map(t => `<span class="topic-tag ${t === 'Official NYCTA Exam' ? 'official' : ''}">${t}</span>`).join('')}</span><button onclick="openNoteEditor(${q.id})" class="ml-auto text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold">📝 ${notes[q.id] ? 'Edit Note' : 'Add Note'}</button></div>
      ${notes[q.id] ? `<div class="mb-3 bg-amber-50 border-l-4 border-amber-400 p-2 rounded-r-lg"><p class="text-xs text-amber-800">📝 ${notes[q.id].text}</p></div>` : ''}
      ${content}
      <p class="font-semibold text-gray-800 mb-3">${q.q}</p>
      <div class="space-y-2">${q.choices.map((c, i) => `<div class="px-3 py-2 rounded-lg text-sm ${i === q.correct ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-gray-50 border border-gray-200'}"><span class="font-semibold mr-1">${String.fromCharCode(65 + i)}.</span> ${c}${i === q.correct ? '<span class="ml-2 text-green-600">✓</span>' : ''}</div>`).join('')}</div>
      <p class="mt-3 text-sm text-gray-600 italic"><strong>Explanation:</strong> ${q.explanation}</p>
    </div>`;
  }).join('');
}
function setReviewFilter(cat) { reviewFilter = cat; renderReview(); }
function scrollToReviewQ(id) { const el = document.getElementById('review-q-' + id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
function reviewJumpTo() { const val = parseInt(document.getElementById('review-jump-input').value); if (val && QUESTIONS[val - 1]) scrollToReviewQ(QUESTIONS[val - 1].id); }

// ============ STATS ============
function renderStats() {
  const accuracy = stats.totalAttempts > 0 ? Math.round((stats.correctAnswers / stats.totalAttempts) * 100) : 0;
  document.getElementById('s-attempts').textContent = stats.totalAttempts;
  document.getElementById('s-accuracy').textContent = accuracy + '%';
  document.getElementById('s-streak').textContent = stats.bestStreak;

  const catStatsEl = document.getElementById('category-stats');
  catStatsEl.innerHTML = CATEGORIES.map(cat => {
    const cs = stats.categoryStats[cat.name];
    const catAcc = cs && cs.attempts > 0 ? Math.round((cs.correct / cs.attempts) * 100) : 0;
    const progress = cs ? Math.min(100, Math.round((cs.attempts / cat.count) * 100)) : 0;
    return `<div><div class="flex justify-between text-sm mb-1"><span class="font-medium text-gray-700">${cat.icon} ${cat.name}</span><span class="text-gray-500">${cs ? `${cs.correct}/${cs.attempts}` : '0/0'} (${catAcc}%)</span></div><div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden"><div class="bg-[#0039A6] h-2 rounded-full transition-all" style="width:${progress}%"></div></div></div>`;
  }).join('');

  const sessionsEl = document.getElementById('recent-sessions');
  if (stats.sessions.length === 0) { sessionsEl.innerHTML = '<p class="text-gray-500 text-sm">No sessions yet. Start a quiz to see your history.</p>'; }
  else { sessionsEl.innerHTML = stats.sessions.map(s => `<div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"><span class="text-sm text-gray-600">${s.date}</span><span class="text-sm font-semibold text-[#0039A6]">${s.score}/${s.total}</span><span class="text-sm font-semibold ${s.accuracy >= 70 ? 'text-[#00A651]' : 'text-[#EE3124]'}">${s.accuracy}%</span></div>`).join(''); }
}
function resetStats() { if (confirm('Reset all progress?')) { stats = { totalAttempts: 0, correctAnswers: 0, currentStreak: 0, bestStreak: 0, categoryStats: {}, sessions: [] }; saveStats(); renderStats(); renderHome(); } }

// ============ START ============
init();
