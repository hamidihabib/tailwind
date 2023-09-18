import useWindowSize from "../useWindowSize";

export default function BreakPoint() {
  const w = useWindowSize().width;
  return w <= 640
    ? "mobile"
    : w <= 768
    ? "tablet"
    : w <= 1024
    ? "laptop"
    : w <= 1280
    ? "desktop"
    : w <= 1536
    ? "tv"
    : "tv";
}
