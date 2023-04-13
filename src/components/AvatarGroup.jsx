import React from "react";
import Avatar from "./Avatar";

export default function AvatarGroup({ users, maxLength, size }) {
  let valSize;
  switch (size) {
    case "xs":
      valSize = 16;
      break;
    case "sm":
      valSize = 24;
      break;
    case "md":
      valSize = 32;
      break;
    case "lg":
      valSize = 64;
      break;
    default:
      valSize = 32;
      break;
  }
  
  const style = {
    width: valSize,
    height: valSize,
    fontSize: `${valSize / 2}px`,
    marginLeft: `-${valSize / 4}px`,
  };

  const remain = users.length - maxLength;

  return (
    <div className="avatar-group">
      {users.slice(0, maxLength).map((name, i) => (
        <Avatar testId={`avatar-${i}`} avatarStyle={style} name={name} key={name} />
      ))}
      {remain > 0 && (
        <div className="avatar" style={style}>
          +{remain}
        </div>
      )}
    </div>
  );
}
