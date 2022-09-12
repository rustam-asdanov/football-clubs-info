const {
  getTeams,
  getTeam,
  addTeam,
  deleteTeam,
  updateTeam,
  addPlayerToTeam,
} = require("../services/team_service");

const getAllTeams = async (req, res) => {
  await getTeams()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getTeamById = async (req, res) => {
  const id = req.params.id;
  await getTeam(id)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const createTeam = async (req, res) => {
  const body = req.body;
  delete body[_id];
  await createTeam(body)
    .then((result) => {
      res.status(201).json({ message: "Team created successfully" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteTeamById = async (req, res) => {
  const id = req.params.id;
  await deleteTeamById(id)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json({
          message: `Team deleted successfully`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateTeamById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await updateTeamById(id, body)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const addNewPlayer = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await addNewPlayer(id, body)
    .then((result) => {
      if (!result || result.length == 0) {
        res.status(404).json({ message: `Team with given id ${id} not found` });
      } else {
        res.status(201).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
  addNewPlayer,
};
