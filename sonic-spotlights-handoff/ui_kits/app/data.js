// Sample data for the Soniq app UI kit — faithful to the v7.4 wireframes.
// Sample artist + campaign + curators are illustrative (per README §9).
window.SoniqData = {
  artist: { name: "Maya Reyes", project: "thresholds", handle: "@thresholds", initials: "MR" },
  release: {
    title: "Dark Moon",
    type: "Single",
    releaseDate: "Jun 14",
    sound: "lo-fi · shoegaze",
    bpm: "118 BPM",
    key: "F# minor",
  },

  // Day-0 activity feed (Welcome opens the panel to this)
  activity: [
    { h: "Drafted your first pitch", m: "14s ago · from your preview" },
    { h: "Analyzed your sound", m: "lo-fi · shoegaze" },
    { h: "Started learning your voice", m: "from your bio" },
    { h: "Ready to score curators", m: "search or paste to begin" },
  ],

  // Curator discovery (launch / BYOC) — fit scores, all unverified at launch
  curators: [
    { id: "slow-core-quarterly", name: "Slow-Core Quarterly", who: "Noa Vasquez · your genre + 3 artists like you",
      fit: 89, state: "scored", added: false,
      reason: "Lo-fi, slow-core, shoegaze — matches Dark Moon's profile. Playlist averages 112 BPM with a female-vocal lean and lots of negative space, close to your track's sonic scan. 3 of the last 20 adds are comparable to you.",
      cites: "computed from public tracks + your sonic scan · Memory · 2 sources" },
    { id: "tape-warm", name: "Tape Warm", who: "1.1k followers · lo-fi, female vocal lean",
      fit: 76, state: "scored", added: false,
      reason: "Strong overlap with your last single's listeners; consistently adds hushed, reverb-forward vocals at slow tempos.",
      cites: "computed from public tracks · Memory · 1 source" },
    { id: "bedroom-pop-gems", name: "Bedroom Pop Gems", who: "pasted link · analyzed · 2 artists like you",
      fit: 71, state: "scored", added: true,
      reason: "You brought this one. Bedroom-pop and dream-pop lean; two recent adds resemble your sound by Soniq's similarity read.",
      cites: "computed from the playlist you pasted · Memory · 1 source" },
  ],

  // A drafted pitch (reviewer / handoff)
  pitch: {
    curator: "Slow-Core Quarterly",
    contact: "Noa Vasquez",
    fit: 89,
    body: "Hi Noa — Dark Moon is a lo-fi, tape-warm single built around live-to-tape restraint; given the slow-core run on Slow-Core Quarterly, I thought it might sit well alongside your recent picks. It's out Jun 14. No pressure either way — thanks for listening.\n\n— Maya",
  },

  // Campaign pipeline (the glance) — four lifecycle states, artist-logged
  pipeline: { queued: 5, sent: 7, replied: 2, placed: 2 },
  pipelineRows: [
    { name: "Tape Warm", note: "sent 3d ago", state: "awaiting-reply" },
    { name: "Slow-Core Quarterly", note: "drafted & approved · copy it whenever you're ready", state: "ready" },
  ],
};
