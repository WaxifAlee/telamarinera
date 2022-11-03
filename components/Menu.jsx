import React from "react";
import menuStyles from "../styles/Menu.module.css";

const Menu = () => {
  //   const tapas = [
  //     "Olivas",
  //     "Pan con tomate",
  //     "Bravas",
  //     "Pimientos de padrón",
  //     "Nachos con guacamole",
  //     "Mejillones al gusto",
  //     "Calamar a la andaluza",
  //     "Sevillanos",
  //     "Boquerones fritos",
  //     "Fritura de mar",
  //     "Gambas a la brasa",
  //     "Gamba Crujiente ",
  //     "Almejas al gusto ",
  //     "Pulpo a la galega ",
  //     "Croquetas de pollo",
  //     "Alitas de pollo",
  //     "Brocheta de pollo",
  //     "Wok de verduras y pollo Thai",
  //     "Gambas al ajillo",
  //   ];
  //   const ensaladas = [
  //     "Ensalada de queso de cabra con cebolla caramelizada",
  //     "Ensalada Manchega",
  //     "Xató",
  //     "Ensalada Mixta",
  //     "Ensalada de huerta(vegana)",
  //     "parrillada de verduras con romesco",
  //     "Ensalada Capresse",
  //   ];
  //   const pescados = ["Salmon", "Dorada", "Sepia", "Parrillada de marisco"];
  //   const carnes = [
  //     "Entercot(300 grams)",
  //     "Pollo Terla Marinera",
  //     "Hamburguesas Tela Marinera",
  //   ];
  //   const menuInfantil = [
  //     "Pollo a la milanesa",
  //     "Pasta com tomate Casero",
  //     "Croquetas de cocido con ensalada",
  //   ];
  //   const pizzas = ["Margarita", "Vegetariana", "4 Queso", "Boloneesa", "Atun"];
  //   const pastas = [
  //     "Espaguetis bolonesa",
  //     "Espaguetis Marinera",
  //     "Raviolone de espinacas con queso fresco y grana padano",
  //   ];
  //   const arroces = [
  //     "Paella Maringera",
  //     "Paella con bogavante",
  //     "Paella de veduras",
  //     "Arroz negro marinera",
  //     "Arroz caldoso con cigala(min 2 personas)",
  //     "Arroz caldoso con bogvante",
  //     "Arroz meloso con conejo y setas",
  //     "Paella mar i montana",
  //     "Fideua",
  //     "Fideua de verduras",
  //     "Paella de confit de pato",
  //     "Alcahofas y ajos tiernos (minimo 2 personas)",
  //   ];
  //   return (
  //     <div className={menuStyles.page_container}>
  //       <div className={menuStyles.menu_outer_container}>
  //         <div className={menuStyles.table_container}>
  //           <h1>CARTA</h1>
  //           <table className={menuStyles.menuCard}>
  //             <tr>
  //               <th>TAPAS</th>
  //               <th>ENSALADAS</th>
  //               <th>PESCADOS</th>
  //               <th>CARNES</th>
  //               <th>MENU INFANTIL</th>
  //               <th>PIZZAS</th>
  //               <th>PASTAS</th>
  //               <th>ARROCES</th>
  //             </tr>
  //             {
  //                { for (let index = 0; index < array.length; index++) {
  //                         const element = array[index];
  //                         <tr></tr>
  //                     }
  //                 }
  //             }
  //           </table>
  //         </div>
  //       </div>
  //     </div>
  return (
    <>
      <div className={menuStyles.page_container}>
        {/* <style type="text/css">
.tg  {border-collapse:collapse;border-color:#aaa;border-spacing:0;}
.tg td{background-color:#fff;border-color:#aaa;border-style:solid;border-width:0px;color:#333;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f38630;border-color:#aaa;border-style:solid;border-width:0px;color:#fff;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-dg7a{background-color:#FCFBE3;text-align:left;vertical-align:top}
</style> */}
        <h1>CARTA</h1>

        <table className={menuStyles.tg}>
          <thead>
            <tr>
              <th class="tg-0lax">TAPAS</th>
              <th class="tg-0lax">ENSALADAS</th>
              <th class="tg-0lax">PESCADOS</th>
              <th class="tg-0lax">Carnes</th>
              <th class="tg-0lax">MENU INFANTIL</th>
              <th class="tg-0lax">Pizzas</th>
              <th class="tg-0lax">Pastas</th>
              <th class="tg-0lax">ARROCES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-dg7a">Olivas</td>
              <td class="tg-dg7a">
                Ensalada de queso de cabra con cebolla caramelizada
              </td>
              <td class="tg-dg7a">Salmón</td>
              <td class="tg-dg7a">Entrecot (300 grms)</td>
              <td class="tg-dg7a">Pollo a la milanesa</td>
              <td class="tg-dg7a">Margarita</td>
              <td class="tg-dg7a">Espaguetis boloñesa</td>
              <td class="tg-dg7a">Paella Marinera</td>
            </tr>
            <tr>
              <td class="tg-0lax">Pan con tomate</td>
              <td class="tg-0lax">Ensalada Manchega</td>
              <td class="tg-0lax">Dorada</td>
              <td class="tg-0lax">Pollo Tela Marinera</td>
              <td class="tg-0lax">Pasta com tomate Casero</td>
              <td class="tg-0lax">Vegetariana</td>
              <td class="tg-0lax">Espaguetis Marinera</td>
              <td class="tg-0lax">Paella con bogavante</td>
            </tr>
            <tr>
              <td class="tg-dg7a">Bravas</td>
              <td class="tg-dg7a">Xató</td>
              <td class="tg-dg7a">Sepia</td>
              <td class="tg-dg7a">Hamburguesa Tela Marinera</td>
              <td class="tg-dg7a">Croquetas de cocido con ensalada</td>
              <td class="tg-dg7a">4 Queso</td>
              <td class="tg-dg7a">
                Raviolone de espinacas con queso fresco y grana padano
              </td>
              <td class="tg-dg7a">Paella de verduras</td>
            </tr>
            <tr>
              <td class="tg-0lax">Pimientos de padrón</td>
              <td class="tg-0lax">Ensalada Mixta</td>
              <td class="tg-0lax">Parrillada de marisco</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">(Postre incluido)</td>
              <td class="tg-0lax">Boloñesa</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">Arroz negro marinera</td>
            </tr>
            <tr>
              <td class="tg-dg7a">Nachos con guacamole</td>
              <td class="tg-dg7a">Ensalada de huerta(vegana)</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a">Atun</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a">
                Arroz caldoso con cigala (mínimo 2 personas)
              </td>
            </tr>
            <tr>
              <td class="tg-0lax">Mejillones al gusto</td>
              <td class="tg-0lax">parrillada de verduras con romesco</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">
                Arroz caldoso con bogavante (mínimo 2 personas)
              </td>
            </tr>
            <tr>
              <td class="tg-dg7a">Calamar a la andaluza</td>
              <td class="tg-dg7a">Ensalada Capresse</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a">
                Arroz meloso con conejo y setas (mínimo 2 personas)
              </td>
            </tr>
            <tr>
              <td class="tg-0lax">Sevillanos</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">Paella mar i montaña</td>
            </tr>
            <tr>
              <td class="tg-dg7a">Boquerones fritos</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a">Fideuá</td>
            </tr>
            <tr>
              <td class="tg-0lax">Fritura de mar</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">Fideuá de verduras</td>
            </tr>
            <tr>
              <td class="tg-dg7a">Gambas a la brasa</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a">
                Paella de confit de pato,alcachofas y ajos tiernos (mínimo 2
                personas)
              </td>
            </tr>
            <tr>
              <td class="tg-0lax">Gamba Crujiente</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
            <tr>
              <td class="tg-dg7a">Almejas al gusto</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
            </tr>
            <tr>
              <td class="tg-0lax">Pulpo a la galega</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
            <tr>
              <td class="tg-dg7a">Croquetas de pollo</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
            </tr>
            <tr>
              <td class="tg-0lax">Alitas de pollo</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
            <tr>
              <td class="tg-dg7a">Brocheta de pollo</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
            </tr>
            <tr>
              <td class="tg-0lax">Wok de verduras y pollo Thai</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
            <tr>
              <td class="tg-dg7a">Gambas al ajillo</td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
              <td class="tg-dg7a"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
