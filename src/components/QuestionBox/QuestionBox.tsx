type Props = {
  question: string,
}

export const QuestionBox = (props: Props) => {
  return (
    <div className="px-10 py-14 border-2 border-black">
      {props.question}
    </div>
  )
}
