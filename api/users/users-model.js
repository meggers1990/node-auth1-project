/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
  const db = require("../../data/db-config");
  function find() {
    return db.select("username", "user_id").from("users");
  }
  
  /**
    resolves to an ARRAY with all users that match the filter condition
   */
  function findBy(filter) {
    return db("users").where(filter);
  }
  
  /**
    resolves to the user { user_id, username } with the given user_id
   */
  async function findById(user_id) {
    const user = await db
      .select("username", "user_id")
      .where("user_id", user_id)
      .from("users");
    return user[0];
  }
  
  /**
    resolves to the newly inserted user { user_id, username }
   */
  async function add(user) {
    const [addedUser] = await db("users").insert(user);
  
    return findById(addedUser);
  }
  
  // Don't forget to add these to the `exports` object so they can be required in other modules
  module.exports = {
    find,
    findBy,
    findById,
    add,
  };