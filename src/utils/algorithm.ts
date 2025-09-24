/**
 * Represents a single cognitive distortion.
 */
export interface ThoughtDistortion {
  id: ThoughtDistortionID;
  name: string;
  description: string;
}

/**
 * Represents a method or exercise to counter distortions.
 * The 'scores' object maps a distortion ID to its effectiveness score.
 * 2: Helps a lot (dark gray checkbox)
 * 1: Helps some (light gray checkbox)
 * 0: Not effective
 */
export interface RecoveryMethod {
  id: string;
  name: string;
  category: string;
  // This property will be added dynamically by the ranking function
  totalScore?: number;
  scores: Record<ThoughtDistortionID, number>;
}

export type ThoughtDistortionID =
  | "all-or-nothing-thinking"
  | "overgeneralization"
  | "mental-filter"
  | "discounting-the-positives"
  | "mind-reading"
  | "fortune-telling"
  | "magnification-and-minimization"
  | "emotional-reasoning"
  | "should-statements"
  | "labeling"
  | "self-blame"
  | "other-blame";

export const thoughtDistortions: ThoughtDistortion[] = [
  {
    id: "all-or-nothing-thinking",
    name: "All-or-Nothing Thinking",
    description: "Viewing situations in absolute, black-and-white terms.",
  },
  {
    id: "overgeneralization",
    name: "Overgeneralization",
    description:
      "Seeing a single negative event as a never-ending pattern of defeat.",
  },
  {
    id: "mental-filter",
    name: "Mental Filter",
    description:
      "Dwelling on a single negative detail, filtering out all positive aspects.",
  },
  {
    id: "discounting-the-positives",
    name: "Discounting the Positives",
    description:
      "Insisting that your positive qualities or accomplishments don't count.",
  },
  {
    id: "mind-reading",
    name: "Mind Reading",
    description:
      "Assuming you know what others are thinking without any real evidence.",
  },
  {
    id: "fortune-telling",
    name: "Fortune Telling",
    description:
      "Predicting that things will turn out badly as an established fact.",
  },
  {
    id: "magnification-and-minimization",
    name: "Magnification & Minimization",
    description:
      "Blowing things out of proportion or shrinking their importance.",
  },
  {
    id: "emotional-reasoning",
    name: "Emotional Reasoning",
    description:
      "Believing that your emotions reflect the way things really are.",
  },
  {
    id: "should-statements",
    name: "Should Statements",
    description:
      'Using "shoulds" and "shouldn\'ts" on yourself and others, leading to guilt or frustration.',
  },
  {
    id: "labeling",
    name: "Labeling",
    description:
      "Applying a fixed, global label to yourself or others instead of describing a specific behavior.",
  },
  {
    id: "self-blame",
    name: "Personalization (Self-Blame)",
    description:
      "Blaming yourself for something you weren't entirely responsible for.",
  },
  {
    id: "other-blame",
    name: "Personalization (Other-Blame)",
    description:
      "Blaming others for your problems while overlooking your own role.",
  },
];

export const recoveryMethods: RecoveryMethod[] = [
  // Basic
  {
    id: "positive-reframing",
    name: "Positive Reframing",
    category: "Basic",
    scores: {
      "all-or-nothing-thinking": 2,
      overgeneralization: 2,
      "mental-filter": 2,
      "discounting-the-positives": 2,
      "mind-reading": 2,
      "fortune-telling": 2,
      "magnification-and-minimization": 2,
      "emotional-reasoning": 2,
      "should-statements": 2,
      labeling: 2,
      "self-blame": 2,
      "other-blame": 2,
    },
  },
  {
    id: "magic-dial",
    name: "Magic Dial",
    category: "Basic",
    scores: {
      "all-or-nothing-thinking": 2,
      overgeneralization: 2,
      "mental-filter": 2,
      "discounting-the-positives": 2,
      "mind-reading": 2,
      "fortune-telling": 2,
      "magnification-and-minimization": 2,
      "emotional-reasoning": 2,
      "should-statements": 2,
      labeling: 2,
      "self-blame": 2,
      "other-blame": 2,
    },
  },
  {
    id: "straightforward-technique",
    name: "Straightforward Technique",
    category: "Basic",
    scores: {
      "all-or-nothing-thinking": 1,
      overgeneralization: 1,
      "mental-filter": 1,
      "discounting-the-positives": 1,
      "mind-reading": 1,
      "fortune-telling": 1,
      "magnification-and-minimization": 1,
      "emotional-reasoning": 1,
      "should-statements": 1,
      labeling: 1,
      "self-blame": 1,
      "other-blame": 0,
    },
  },
];

/**
 * Takes an array of selected thought distortion IDs and returns a ranked list
 * of exercises, ordered from most to least effective.
 */
export function getRankedExercises(
  selectedDistortionIds: ThoughtDistortionID[],
): RecoveryMethod[] {
  if (!selectedDistortionIds || selectedDistortionIds.length === 0) {
    return [];
  }

  const rankedExercises = recoveryMethods
    .map((exercise) => {
      // Calculate the total score for the current exercise based on selected distortions
      const totalScore = selectedDistortionIds.reduce((sum, distortionId) => {
        // Add the score for this specific distortion, defaulting to 0 if not found
        return sum + (exercise.scores[distortionId] || 0);
      }, 0);

      // Return a new object with the totalScore included
      return { ...exercise, totalScore };
    })
    // Filter out exercises that have no effect on the selected distortions
    .filter((exercise) => exercise.totalScore > 0)
    // Sort the exercises from highest score to lowest
    .sort((a, b) => b.totalScore - a.totalScore);

  return rankedExercises;
}
