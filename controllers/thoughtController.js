const { Thought, User } = require('../models');

module.exports = {
 
  getThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  createThought(req, res) {
    Thought.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        thought
          ?res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thought } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

createReaction({ params, body }, res) 
  Thought.findOneAndUpdate(
    { _id: params.thoughtId },
    { $addToSet: { reactions: body } },
    { runValidators: true, new: true }
  )
  .then((dbThoughtData) => {
    if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought with this id!' });
      return;
    }
    res.json(dbThoughtData);
  })
  .catch((err) => res.status(500).json(err));
  
  


deleteReaction({ params }, res){
  Thought.findOneAndUpdate(
    { _id: params.thoughtId },
    { $pull: { reactions: { reactionId: params.reactionId } } },
    { new: true }
  )};
  
   .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.status(500).json(err));
