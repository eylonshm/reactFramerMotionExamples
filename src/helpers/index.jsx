export const splitStringIntoSpans = (str) => {
  const chars = str.split('')
  return (
    <>
      {chars.map((char, index) => (
        <span className={`char${index}`}>{char}</span>
      ))}
    </>
  )
}
