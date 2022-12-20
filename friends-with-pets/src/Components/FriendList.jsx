import react from "react"
import Friend from "./subComponents/Friend";
import data from "../data";

const FriendList = () => {
    const mapFriends = data.map(item => {
        return(
          <div>
            <Friend
              {...item}
            />
          </div>
        )
      })
    return(
        <section>
            <nav className="Friend">
                {mapFriends}
            </nav>
        </section>
    )
}

export default FriendList;