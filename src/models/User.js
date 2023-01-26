module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        tableName: 'users',
        timestamps: false,
    })

    return users;
};