const loadAbout = () => {


    const h1 = document.createElement('h1');

    const p1 = document.createElement('p');

    const p2 = document.createElement('p');

    h1.innerHTML = "Contact Us"

    p1.innerHTML = "123-456-789"

    p2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga nemo incidunt veritatis hic rem deleniti provident exercitationem id numquam distinctio enim! Atque libero veritatis qui fuga dolorem, sit molestias"

    const content = document.getElementById('content');

    content.appendChild(h1)
    content.appendChild(p1)
    content.appendChild(p2)




}


export default loadAbout