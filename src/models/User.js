module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'blogPosts',
    });
  };
  return users;
};
