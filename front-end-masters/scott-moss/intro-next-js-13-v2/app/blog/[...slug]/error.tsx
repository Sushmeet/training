"use client";

export default function Loading(errorInfo) {
  console.log("error-----", errorInfo);
  const { error } = errorInfo;
  return <div>....Error we get {error?.message}</div>;
}
