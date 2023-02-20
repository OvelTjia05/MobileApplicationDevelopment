export let convert = (Fahrenheit) => {
  let celcius = (5 / 9) * (Fahrenheit - 32);
  return `${Fahrenheit} Fahrenheit = ${celcius} celcius`;
};

const BMI = (berat, tinggi) => {
  tinggi = tinggi / 100;
  let hasil = berat / (tinggi * tinggi);
  let cat;
  if (hasil < 18.5) {
    cat = "Kurus";
  } else if (hasil >= 18.5 && hasil < 25) {
    cat = "Sehat";
  } else if (hasil >= 25 && hasil < 30) {
    cat = "Gemuk";
  } else {
    cat = "Obesitas";
  }
  console.log(
    `Berat = ${berat}kg\nTinggi = ${tinggi}m\nBMI = ${hasil}\nKategori = ${cat}`
  );
};

export default BMI;
