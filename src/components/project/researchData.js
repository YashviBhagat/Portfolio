import Titanic from '../../assets/titanic.png';
import Glass from '../../assets/glass.png';
import RockMine from '../../assets/rockmine.jpg';
export const researchData = [
    {
        id: 1,
        title: "Titanic Survival",
        titleBreak: " Titanic <br /> Survival",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Titanic-Disaster",
        image: Titanic,
        description: "Built a machine-learning pipeline on Kaggle’s Titanic: Machine Learning from Disaster dataset to predict passenger survival. Performed data cleaning, feature engineering, and hyper-parameter tuning with Random Forest, Logistic Regression, and Decision Tree models, achieving 82 % accuracy with Random Forest..",
        technologies: ["Numpy","Pandas","Matplotlib","Scikitlearn"]
    },
    {
        id: 2,
        title: "Linear Methods for Classification",
        titleBreak: " Glass <br /> Dataset",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Linear-Models-for-Classification",
        image: Glass,
        description: "Explored linear classifiers (Perceptron, Logistic Regression) on the Glass dataset. Addressing class overlap through data preprocessing techniques, including normalization and RBF Kernel transformat. Implemented rcross-validation (10-fold) to assess model performance, achieving 90% accuracy.",
        technologies: ["Numpy","Pandas","Matplotlib","Scikitlearn"]
    },
    {
        id: 3,
        title: "Rock vs mine predication",
        titleBreak: " Rock vs mine <br /> predication",
        githubIcon: true,
        githubLink: "https://github.com/YashviBhagat/Rock_vs_mine",
        image: RockMine,
        description: "A binary classification model that predicts whether a sonar signal reflects off a rock or a metal mine. The workflow covers data cleanup, feature scaling, model training (e.g., Logistic Regression / Random Forest), cross-validation, and evaluation with accuracy, precision/recall. Includes a concise inference script/notebook cell for quick predictions and reproducible results.",
        technologies: ["Numpy","Pandas","Matplotlib","Scikitlearn"]
    },
];