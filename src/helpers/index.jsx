export const splitStringIntoSpans = (str) => {
  const chars = str.split('')
  return (
    <>
      {chars.map((char, index) => (
        <span class={`char${index}`}>{char}</span>
      ))}
    </>
  )
}
