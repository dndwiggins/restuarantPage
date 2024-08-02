

const loadHome = () => {

    /*        <h1>Whiskey and Rye</h1>
            <p>We use only the best vodka including Popov and Zelkos so all of our drinks taste like batteries</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga nemo incidunt veritatis hic rem deleniti provident exercitationem id numquam distinctio enim! Atque libero veritatis qui fuga dolorem, sit molestias</p> */

    const h1 = document.createElement('h1');

    const p1 = document.createElement('p');

    const p2 = document.createElement('p');

    h1.innerHTML = "Whiskey and Rye"

    p1.innerHTML = "We use only the best vodka including Popov and Zelkos so all of our drinks taste like batteries"

    p2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga nemo incidunt veritatis hic rem deleniti provident exercitationem id numquam distinctio enim! Atque libero veritatis qui fuga dolorem, sit molestias"

    const content = document.getElementById('content');

    content.appendChild(h1)
    content.appendChild(p1)
    content.appendChild(p2)




}


export default loadHome