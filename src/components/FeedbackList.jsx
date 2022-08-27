import FeedbackItem from "./FeedbackItem"
import {motion, AnimatedPresence} from 'framer-motion'

const FeedbackList = ({feedback, handleDelete}) => {
  if(!feedback || feedback.length === 0){
    return <p>No Feedback yet</p>
  }
  return (
    <div className="feedback-list">
      <AnimatedPresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial= {{opacity:0}}
            animate= {{opacity:1}}
            exit= {{opacity:0}}
          >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
          </motion.div>
        ))}
      </AnimatedPresence>
    </div>
  )
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //       ))}
  //   </div>
  // )
}

export default FeedbackList
