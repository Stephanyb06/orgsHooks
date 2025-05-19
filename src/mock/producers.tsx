import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jennyJack from "../assets/produtores/jenny-jack.png";
import potater from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";

const randomResult = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
}

const producers ={
    title: "Produtores",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Grow",
            image: grow,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Potager",
            image: potater,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${randomResult(1, 500)}m`,
            stars: randomResult(1, 5),
        },

    ]
}

export default producers;