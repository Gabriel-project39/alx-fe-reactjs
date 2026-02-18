import axios from "axios";

// REQUIRED function for the task
export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
};

// Your advanced search (this is also correct 👍)
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data;
};

