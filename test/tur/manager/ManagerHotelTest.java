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
import tur.bean.BComplementario;
import tur.bean.BGeometry;
import tur.bean.BHotel;

import tur.bean.BImagen;
import tur.bean.BServiciosAdicional;
import tur.datasource.BDConnecion;

/**
 *
 * @author ruben
 */
public class ManagerHotelTest {

    public ManagerHotelTest() {
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
     * Test of registrarHotel method, of class ManagerHotel.
     */
    /* @Test
     public void testRegistrarHotel() {
     System.out.println("registrarHotel");
     BHotel bHotel = null;
     ManagerHotel instance = null;
     instance.registrarHotel(bHotel);
     // TODO review the generated test code and remove the default call to fail.
     fail("The test case is a prototype.");
     }
     */
    /**
     * Test of listarhotel method, of class ManagerHotel.
     */
    @Test
    public void testListarhotel() {

        List<BHotel> listhotel = new LinkedList<BHotel>();
        BHotel bHotel = new BHotel();
        //Producto
        bHotel.setIdproducto("2p");
        bHotel.setNombre("Ayacucho Plaza Hotel");
        bHotel.setClase("Hotel");
        bHotel.setEstado(true);

        //Servicio Hotel
        bHotel.setIdhotel("2ph");
        bHotel.setCategoria("4 Estrellas");
        bHotel.setDescripcion("Es el hotel más emblemático de la ciudad, la decoración de sus diferentes ambientes es bastante tradicional y conserva un marcado estilo colonial.");
        bHotel.setDireccion("Jr. 9 de Dicimbre 184");
        bHotel.setTelefono("(066) 322202");
        bHotel.setSitio_web("http://www.dmhoteles.pe/index.php");
        bHotel.setCorreo_elec("reservas@dematourshoteles.com");
        bHotel.setTipo_precio_hab("Simple S/.180, doble S/. 216, Suite S/. 348");
        bHotel.setFormas_pago("VISA y Mastercard");

        //Geometry
        BGeometry bGeometry = new BGeometry();
        bGeometry.setLatitud(-13.15883);
        bGeometry.setLongitud(-74.22592);
        bGeometry.setCoordinates();
        bHotel.setGeometry(bGeometry);
        //Imagen
        ArrayList<BImagen> list = new ArrayList<BImagen>();
        String id = "2p";
        BImagen bImagen1 = new BImagen();
        bImagen1.setUrl("plaza1130820202125.jpg");

        bImagen1.setIdproducto("2p");
        list.add(bImagen1);

        BImagen bImagen2 = new BImagen();
        bImagen2.setUrl("plaza2130820202125.jpg");
        bImagen2.setIdproducto("2p");
        list.add(bImagen2);

        BImagen bImagen3 = new BImagen();
        bImagen3.setUrl("plaza3130820202125.jpg");
        bImagen3.setIdproducto("2p");
        list.add(bImagen3);
        bHotel.setImagenes(list);

        //servicios adicional
        ArrayList<BServiciosAdicional> list_ser_ad = new ArrayList<BServiciosAdicional>();
        BServiciosAdicional bServiciosAdicional = new BServiciosAdicional();
        bServiciosAdicional.setIdproducto("2p");
        bServiciosAdicional.setTipo("Restaurant");
        list_ser_ad.add(bServiciosAdicional);

        bHotel.setbServiciosAdicional(list_ser_ad);
        //Array Hotel
        listhotel.add(bHotel);


        BDConnecion conexion = new BDConnecion();
        conexion.getConnection();

        ManagerHotel instance = null;
        instance = new ManagerHotel(conexion);

        List expResult = listhotel;

        List result = instance.listarhotel();
        for (int i = 0; i < expResult.size() && expResult.size() == result.size(); i++) {

            BHotel b_expResult = (BHotel) expResult.get(i);
            BHotel b_result = (BHotel) result.get(i);

            assertEquals(b_expResult.getIdproducto(), b_result.getIdproducto());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getClase(), b_result.getClase());
            assertEquals(b_expResult.isEstado(), b_result.isEstado());


            assertEquals(b_expResult.getIdhotel(), b_result.getIdhotel());
            assertEquals(b_expResult.getCategoria(), b_result.getCategoria());
            assertEquals(b_expResult.getDireccion(), b_result.getDireccion());
            assertEquals(b_expResult.getTelefono(), b_result.getTelefono());
            assertEquals(b_expResult.getSitio_web(), b_result.getSitio_web());
            assertEquals(b_expResult.getCorreo_elec(), b_result.getCorreo_elec());
            assertEquals(b_expResult.getTipo_precio_hab(), b_result.getTipo_precio_hab());
            assertEquals(b_expResult.getFormas_pago(), b_result.getFormas_pago());

            BGeometry geo_expResult = b_expResult.getGeometry();
            BGeometry geo_result = b_result.getGeometry();

            //Geometry
            assertEquals(geo_expResult.getCoordinates()[0], geo_result.getCoordinates()[0], 1e-8);//double1 double 2, and delta
            assertEquals(geo_expResult.getCoordinates()[1], geo_result.getCoordinates()[1], 1e-8);
            //Imagen
            for (int j = 0;
                    j < b_expResult.getImagenes()
                    .size() && (b_expResult.getImagenes().size() == b_result.getImagenes().size()); j++) {
                assertEquals(b_expResult.getImagenes().get(j).getIdproducto(), b_result.getImagenes().get(j).getIdproducto());
            }
        }
    }
}