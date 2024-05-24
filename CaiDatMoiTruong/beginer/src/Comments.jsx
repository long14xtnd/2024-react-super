const formatDate = (date) => {
  return new Date(date).toTimeString()
}
function Avatar(props) {
  return <img src={props.author.avatarUrl} alt={props.author.name} />
}
const UserInfo = (props) => {
  ;<div className='UserInfo'>
    <div className='UserInfo-name'>{props.user.name}</div>
    <Avatar user={props.user} />
  </div>
}
function Comments(props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  )
}
export default Comments
