import { places } from './where-do-we-go.data.js'

export { explore }

function explore() {
    let sortedPlaces = sort(places)
    document.body.style.overflowX = 'hidden';

    createSections(sortedPlaces)
    createDirection()

    let sections = document.querySelectorAll('section');
    let direction = document.querySelector('.direction')

    const makeTag = (i) => {
        const tag = document.createElement('a');
        tag.className = 'location';
        tag.style.color = sortedPlaces[i].color;
        tag.textContent = `${sortedPlaces[i].name}\n${sortedPlaces[i].coordinates}`;
        tag.setAttribute('href', `https://google.com/maps/place/${sortedPlaces[i].coordinates}`);
        tag.setAttribute('target', '_blank');
        sections[i].append(tag);
    }

    let prev = scrollY;
    let prevIndex = Math.round(scrollY / window.innerHeight);
    makeTag(prevIndex);

    document.addEventListener('scroll', (e) => {
        const index = Math.round(scrollY / window.innerHeight);
        if (prevIndex != index) {
            sections[prevIndex].childNodes[0].remove();
            console.log(sections[index].childNodes, prevIndex, index)
            makeTag(index);
        }
        prevIndex = index;

        if (prev > scrollY) direction.textContent = 'N';
        else if (prev < scrollY) direction.textContent = 'S';
        prev = scrollY;
    });
}

function sort(arr) {
    let array = [...arr]
    array.sort((a, b) => {
        if (getNorth(a) > getNorth(b)) {
            return -1
        }
        if (getNorth(a) < getNorth(b)) {
            return 1
        }
        return 0
    })
    return array
}

function getNorth(obj) {
    let north = obj.coordinates.split(' ')[0].replace(/[°'."]/g, '')
    if (north.includes('N')) {
        north = Number(north.slice(0, 5))
    } else {
        north = Number(north.slice(0, 5)) * -1
    }
    return north
}

function createSections(sortedPlaces) {
    sortedPlaces.forEach((place) => {
        let section = document.createElement('section');
        section.style.background = `url(./where-do-we-go_images/${place.name.toLowerCase().split(',')[0].replace(/ /g, '-')}.jpg)`;
        section.style.backgroundRepeat = 'no-repeat';
        section.style.backgroundSize = 'cover';
        section.style.backgroundPosition = 'center';
        document.body.append(section);
    });
}

function createDirection() {
    let direction = document.createElement('div')
    direction.className = 'direction';
    direction.textContent = 'N';
    document.body.append(direction);
}

// import { places } from "./where-do-we-go.data.js";

// export const explore = () => {
//   let p = sortPlaces(places);

//   createHeading();
//   createDirection();

//   let i = Math.round(window.scrollY / window.innerHeight);
//   let currentPlace;

//   const setCurrentPlace = (index) => {
//     currentPlace = p[index];
//     refreshHeading(currentPlace);
//   };

//   setCurrentPlace(i);

//   let lastPos = window.scrollY;
//   window.addEventListener("scroll", (e) => {
//     let index = Math.round(window.scrollY / window.innerHeight);
//     setCurrentPlace(index);

//     if (lastPos < scrollY) {
//       document.querySelector(".direction").textContent = "S";
//     } else {
//       document.querySelector(".direction").textContent = "N";
//     }

//     lastPos = scrollY;
//   });

//   renderSections(p);
// };

// const createDirection = () => {
//   let el = document.createElement("div");
//   el.classList.add("direction");
//   el.textContent = "S";
//   document.body.append(el);
// };

// const refreshHeading = (p) => {
//   let h = document.querySelector("a.location");
//   h.textContent = `${p.name}\n${p.coordinates}`;
//   h.style.color = p.color;
//   h.setAttribute("href", `https://www.google.com/maps/place/${p.coordinates}`);
// };

// const createHeading = () => {
//   let el = document.createElement("a");
//   el.classList.add("location");
//   el.setAttribute("target", "_blank");
//   el.setAttribute("href", "#");
//   document.body.append(el);
// };

// const renderSections = (p) => {
//   p.forEach((q) => {
//     document.body.innerHTML += `<section style="background: url('./where-do-we-go_images/${q.name
//       .split(",")[0]
//       .toLowerCase()
//       .replace(/[ ]/g, "-")}.jpg');"></section>`;
//   });
// };

// const sortPlaces = (p) =>
//   p.sort((a, b) => {
//     let [lta] = DMS(a.coordinates);
//     let [ltb] = DMS(b.coordinates);

//     console.log(lta, ltb);

//     return ltb - lta;
//   });

// const DMS = (p) => {
//   let [lat, long] = p.split(" ");

//   let lt = DMShelper(lat.slice(0, -1));
//   let ln = DMShelper(long.slice(0, -1));

//   if (lat.slice(-1) === "S") lt = -lt;
//   if (lat.slice(-1) === "W") ln = -ln;

//   return [lt, ln];
// };

// const DMShelper = (lat) => {
//   let deg = +lat.slice(0, lat.indexOf("°"));
//   lat = lat.slice(lat.indexOf("°") + 1);

//   let min = +lat.slice(0, lat.indexOf("'"));
//   lat = lat.slice(lat.indexOf("'") + 1);
//   let sec = +lat.slice(0, -1);

//   return deg + min / 60 + sec / 60 / 60;
// };
