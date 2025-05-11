
import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    // console.log("Incoming IDs:", { id, friendId });

    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    // console.log("User:", user);
    // console.log("Friend:", friend);

    if (!user || !friend) {
      // console.log("User not found:", !user ? id : null);
      // console.log("Friend not found:", !friend ? friendId : null);
      return res.status(404).json({ message: "User or Friend not found" });
    }

    if (user.friends.includes(friendId)) {
      // If friend exists, remove the friend
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      // Add friend if not in the list
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    const updatedFriends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = updatedFriends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    console.error("Error in addRemoveFriends:", err.message);
    res.status(500).json({ error: err.message });
  }
};
