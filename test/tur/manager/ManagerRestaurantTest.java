/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.manager;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import tur.bean.BGeometry;
import tur.bean.BImagen;
import tur.bean.BRestaurant;
import tur.datasource.BDConnecion;

/**
 *
 * @author ruben
 */
public class ManagerRestaurantTest {

    public ManagerRestaurantTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of registrarrestaurant method, of class ManagerRestaurant.
     */
    /*@Test
     public void testRegistrarrestaurant() {
     System.out.println("registrarrestaurant");
     BRestaurant bRestaurant = null;
     ManagerRestaurant instance = null;
     instance.registrarrestaurant(bRestaurant);
     // TODO review the generated test code and remove the default call to fail.
     fail("The test case is a prototype.");
     }*/
    /**
     * Test of listarrestaurant method, of class ManagerRestaurant.
     */
    @Test
    public void testListarrestaurant() {
        List<BRestaurant> listRestaurant = new LinkedList<BRestaurant>();
        BRestaurant bRestaurant = new BRestaurant();
        /* 
         //Producto
         bRestaurant.setIdproducto("22p");
         bRestaurant.setNombre("La Casona");
         bRestaurant.setClase("Restaurant");
         bRestaurant.setEstado(true);
         //Servicio Restaurant
         bRestaurant.setIdrestaurant("22pre");
         bRestaurant.setCategoria("3 Tenedores");
         bRestaurant.setTipo("Comida típica y nacional");
         bRestaurant.setDescripcion("Restaurant con bastante tradición en platos típicos ayacuchanos, frecuentado y recomendado por los turistas y personas locales conocedores.");

         bRestaurant.setDireccion("Jr. Bellido 463");
         bRestaurant.setTelefono("(066) 31-2733");
         //bRestaurant.setSitio_web("");
         bRestaurant.setHorario_atencion("Lunes a domingo de 12 a 22.30");
         bRestaurant.setEspecialidad("Puca picante");
         bRestaurant.setPrecio_promedio("S/.15, menú S/. 6");
         bRestaurant.setFormas_pago("VISA y Mastercard");

         //Geometry
         BGeometry bGeometry = new BGeometry();
         bGeometry.setLatitud(-13.15861);
         bGeometry.setLongitud(-74.2254);
         bGeometry.setCoordinates();
         bRestaurant.setGeometry(bGeometry);
         //Imagen
         ArrayList<BImagen> list = new ArrayList<BImagen>();
         String id = "22p";
         BImagen bImagen1 = new BImagen();
         bImagen1.setIdproducto(id);
         bImagen1.setUrl("lacasona130903092649.jpg");

         list.add(bImagen1);
         bRestaurant.setImagenes(list);
         */

        /**
         * **********************************************
         */
        //Producto
        bRestaurant.setIdproducto("22p");
        bRestaurant.setNombre("La Casona");
        bRestaurant.setClase("Restaurant");
        bRestaurant.setEstado(true);
        //Servicio Restaurant
        bRestaurant.setIdrestaurant("22pre");
        bRestaurant.setCategoria("2 Tenedores");
        bRestaurant.setTipo("Comida típica y nacional");
        bRestaurant.setDescripcion("Restaurant con bastante tradición en platos típicos ayacuchanos, frecuentado y recomendado por los turistas y personas locales conocedores.");

        bRestaurant.setDireccion("Jr. Bellido 463");
        bRestaurant.setTelefono("(066) 31-2733");
        //bRestaurant.setSitio_web("");
        bRestaurant.setHorario_atencion("Lunes a domingo de 12 a 22.30");
        bRestaurant.setEspecialidad("Puca picante");
        bRestaurant.setPrecio_promedio("S/.15, menú S/. 6");
        bRestaurant.setFormas_pago("VISA y Mastercard");

        //Geometry
        BGeometry bGeometry = new BGeometry();
        bGeometry.setLatitud(-13.15853);
        bGeometry.setLongitud(-74.22557);
        bGeometry.setCoordinates();
        bRestaurant.setGeometry(bGeometry);
        //Imagen
        ArrayList<BImagen> list = new ArrayList<BImagen>();
        String id = "22p";
        BImagen bImagen1 = new BImagen();
        bImagen1.setIdproducto(id);
        bImagen1.setUrl("lacasonarest131022211210.jpg");

        list.add(bImagen1);
        bRestaurant.setImagenes(list);

        /**
         * *********************************************
         */
        //Array Restaurant
        listRestaurant.add(bRestaurant);
        BDConnecion conexion = new BDConnecion();
        conexion.getConnection();

        ManagerRestaurant instance = null;
        instance = new ManagerRestaurant(conexion);

        List expResult = listRestaurant;

        List result = instance.listarrestaurant();

        //    for (int i = 0; i < expResult.size() && expResult.size() == result.size(); i++) {
        for (int i = 0; i < 1; i++) {
            BRestaurant b_expResult = (BRestaurant) expResult.get(i);
            BRestaurant b_result = (BRestaurant) result.get(i);
            assertEquals(b_expResult.getIdproducto(), b_result.getIdproducto());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getClase(), b_result.getClase());
            assertEquals(b_expResult.isEstado(), b_result.isEstado());
            assertEquals(b_expResult.getIdrestaurant(), b_result.getIdrestaurant());
            assertEquals(b_expResult.getCategoria(), b_result.getCategoria());
            assertEquals(b_expResult.getTipo(), b_result.getTipo());
            assertEquals(b_expResult.getDireccion(), b_result.getDireccion());
            assertEquals(b_expResult.getTelefono(), b_result.getTelefono());
            //assertEquals(b_expResult.getSitio_web(), b_result.getSitio_web());
            assertEquals(b_expResult.getHorario_atencion(), b_result.getHorario_atencion());
            assertEquals(b_expResult.getEspecialidad(), b_result.getEspecialidad());
            assertEquals(b_expResult.getPrecio_promedio(), b_result.getPrecio_promedio());
            assertEquals(b_expResult.getFormas_pago(), b_result.getFormas_pago());

            BGeometry geo_expResult = b_expResult.getGeometry();
            BGeometry geo_result = b_result.getGeometry();

            //Geometry
            assertEquals(geo_expResult.getCoordinates()[0], geo_result.getCoordinates()[0], 1e-8);//double1 double 2, and delta
            assertEquals(geo_expResult.getCoordinates()[1], geo_result.getCoordinates()[1], 1e-8);
            //Imagen
            for (int j = 0;
                    j < b_expResult.getImagenes().size() && (b_expResult.getImagenes().size() == b_result.getImagenes().size()); j++) {
                assertEquals(b_expResult.getImagenes().get(j).getIdproducto(), b_result.getImagenes().get(j).getIdproducto());
            }
        }
    }
}
