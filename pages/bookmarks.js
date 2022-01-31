import React from "react";
import Bookmark from "../components/Bookmark";

const bookmarks = () => {
  return (
    <section className="lg:py-12 sm:py-8 py-4">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex bg-blue-500 flex-1">
          <div className="w-2/5 flex flex-col space-y-2">
            <Bookmark />
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
            <span>bookmarks</span>
          </div>
          <div className="w-3/5 bg-red-500">details</div>
        </div>
      </div>
    </section>
  );
};

export default bookmarks;
