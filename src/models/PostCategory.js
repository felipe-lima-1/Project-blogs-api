module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
      post_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
    }
  );

    postCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: postCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: postCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
    };
  return postCategory;
};