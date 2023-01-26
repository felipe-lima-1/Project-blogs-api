module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
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

    users.associate = (models) => {
        users.hasMany(models.BlogPost, {
            foreignKey: 'user_id',
            as: 'blog_posts',
        })
    }

    return users;
};