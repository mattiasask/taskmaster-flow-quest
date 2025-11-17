export type ProblemType = 'AxeProblem' | 'BrowserProblem' | 'LanguageProblem';

export type SuiteType = 'Accessibility' | 'Functionality' | 'Language';

export interface SquidlerProblem {
  id: string;
  ruleId: string;
  description: string;
  htmlSnippet: string;
  cssSelectors: string[];
  fixInstructions: string;
  helpUrl: string;
  screenshotUrl: string;
  pageUrl: string;
  pageTitle: string;
  problemType: ProblemType;
  tags: string[];
}

export interface SquidlerResponse {
  siteId: string;
  siteUrl: string;
  totalProblems: number;
  returnedProblems: number;
  offset: number;
  problems: SquidlerProblem[];
}

export interface SquidlerStatusResponse {
  status: 'resolved' | 'dismissed';
  problemId: string;
}
