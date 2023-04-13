import React, { memo } from "react";

export default memo(function Avatar({ name, avatarStyle, testId }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div role="child" className="avatar" data-testid={testId} style={avatarStyle}>
      {initials}
    </div>
  );
})
