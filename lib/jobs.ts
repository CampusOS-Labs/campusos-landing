export type JobListing = {
  id: string;
  title: string;
  location: string;
  type: string;
  /** Short mono tag next to the title — e.g. engineering, design */
  tag: string;
  summary: string;
};

export const JOBS: JobListing[] = [
  {
    id: "founding-engineer",
    title: "Founding Engineer",
    location: "Pune / Remote",
    type: "Full-time",
    tag: "engineering",
    summary:
      "Ship Billy, Relay, and Shift end to end — product, infra, and the messy school workflows in between.",
  },
  {
    id: "founding-designer",
    title: "Founding Designer",
    location: "Pune / Remote",
    type: "Full-time",
    tag: "design",
    summary:
      "Own the visual and interaction language for Blackboard. Make school ops software feel inevitable.",
  },
  {
    id: "school-partnerships",
    title: "School Partnerships",
    location: "Pune",
    type: "Full-time",
    tag: "partnerships",
    summary:
      "Sit with school owners and admins, find what's breaking, and get Blackboard live on campus.",
  },
];
