import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={HandleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ padding: "0 1rem" }}>
        New only
        <input type="checkbox" name="latest" />
      </label>
      <input
        type="submit"
        value="Search"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </form>
  );
};

export default BlogFilter;
