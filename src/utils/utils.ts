export const trim = (str = "", ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};


export const animationClass = " opacity-0 intersect:opacity-100 transition-opacity intersect-once intersect-half duration-1000"

export const animationClassInstant = " opacity-0 intersect:opacity-100 transition-opacity intersect-once duration-1000"