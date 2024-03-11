import React from "react";

type Props = {
  onClick: () => void;
  active: boolean;
};

const FlyingIcon: React.FC<Props> = ({ onClick, active }: Props) => {
  return (
    <svg
      fill="#000000"
      onClick={onClick}
      className={`icon ${active ? "flying" : ""}`}
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>feather-wing</title>
      <path d="M28.665 25.537c-1.966-1.094-3.116-2.962-3.232-4.673-0.619-9.164-15.889-10.357-23.662-19.509l-0 0c0.403 11.661 13.204 11.604 20.744 17.449-4.879-2.113-12.876-1.649-18.664-5.404 2.7 8.775 12.332 5.886 19.406 8.271-4.212-0.411-9.768 1.968-15.020 0.086 4.638 7.31 10.654 2.427 16.483 2.47-2.94 0.749-5.977 4.025-10.036 3.718 4.946 4.76 7.536 0.139 11.079-1.633-0.357 0.425-0.583 0.967-0.61 1.565-0.064 1.443 1.054 2.665 2.497 2.73s2.665-1.054 2.73-2.497c0.052-1.169-0.672-2.193-1.716-2.574z"></path>
    </svg>
  );
};

export default FlyingIcon;
