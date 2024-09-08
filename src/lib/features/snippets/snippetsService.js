import { Octokit } from "@octokit/rest";
import {
  actionFailure,
  fetchSnippetSuccess,
  actionLoading,
} from "./snippetSlice";
export const octokit = new Octokit({});

export const fetchSnippet = (path) => async (dispatch) => {
    try {
        dispatch(actionLoading("Fetching snippet"));
        const { data } = await octokit.request(
          "GET /repos/{owner}/{repo}/contents/{path}",
          {
            owner: "yosephhabtamu",
            repo: "calculator",
            path: `${path}`,
          }
        );
        dispatch(fetchSnippetSuccess(data));
    } catch (error) {
        dispatch(actionFailure(error.message));
    }
    };