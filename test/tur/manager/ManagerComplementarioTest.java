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
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import tur.bean.BComplementario;
import tur.bean.BGeometry;
import tur.bean.BImagen;
import tur.datasource.BDConnecion;

/**
 *
 * @author ruben
 */
public class ManagerComplementarioTest {

    public ManagerComplementarioTest() {
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

    // @Test
   /* public void testRegistrarcomplementario() {
     System.out.println("registrarcomplementario");


     BComplementario bComplementario = null;

     ManagerComplementario instance = null;
     instance.registrarcomplementario(bComplementario);
     // TODO review the generated test code and remove the default call to fail.
     fail("The test case is a prototype.");
     }*/
    /**
     * Test of listarcomplementario method, of class ManagerComplementario.
     */
    @Test
    public void testListarcomplementario() {


        List<BComplementario> listcomplementario = new LinkedList<BComplementario>();
        BComplementario bComplementario = new BComplementario();

        //Producto
        bComplementario.setIdproducto("1p");
        bComplementario.setNombre("Mercado Artesanal Shosaku Nagase");
        bComplementario.setClase("Complementario");
        bComplementario.setEstado(true);
        //Servicio Complementario
        bComplementario.setIdcomplementario("1pc");
        bComplementario.setTipo("Comercio de artesanías");
        bComplementario.setDescripcion("Es un mercado donde puede encontrar retablos, textiles, tapices, cerámicas artísticas y utilitaria, platería y hojalatería.");
        bComplementario.setDireccion("Av. Maravillas 101, 31 Ayacucho");
        bComplementario.setTelefono("(066) 310213");
        bComplementario.setHorario_atencion("lun - dom: 9:00 - 20:30");
        bComplementario.setSitio_web("https://www.facebook.com/pages/Mercado-Artesanal-Shosaku-Nagase-Ayacucho/179515285530369");
        //Geometry
        BGeometry bGeometry = new BGeometry();
        bGeometry.setLatitud(-13.15427);
        bGeometry.setLongitud(-74.22551);
        bGeometry.setCoordinates();
        bComplementario.setGeometry(bGeometry);
        //Imagen

        ArrayList<BImagen> list = new ArrayList<BImagen>();
        String id = "1p";
        BImagen bImagen1 = new BImagen();
        bImagen1.setUrl("sh1130903090922.jpg");

        bImagen1.setIdproducto("1p");
        list.add(bImagen1);

        BImagen bImagen2 = new BImagen();
        bImagen2.setUrl("sh2130903090922.jpg");
        bImagen2.setIdproducto("1p");
        list.add(bImagen2);

        BImagen bImagen3 = new BImagen();
        bImagen3.setUrl("sh3130903090922.jpg");
        bImagen3.setIdproducto("1p");
        list.add(bImagen3);

        BImagen bImagen4 = new BImagen();
        bImagen4.setUrl("sh4130903090922.jpg");
        bImagen4.setIdproducto("1p");
        list.add(bImagen4);

        bComplementario.setImagenes(list);
        //Array Complementario
        listcomplementario.add(bComplementario);
        BDConnecion conexion = new BDConnecion();
        conexion.getConnection();

        ManagerComplementario instance = null;
        instance = new ManagerComplementario(conexion);

        List expResult = listcomplementario;

        List result = instance.listarcomplementario();

        for (int i = 0; i < expResult.size() && expResult.size() == result.size(); i++) {
            BComplementario b_expResult = (BComplementario) expResult.get(i);
            BComplementario b_result = (BComplementario) result.get(i);

            assertEquals(b_expResult.getIdproducto(), b_result.getIdproducto());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getClase(), b_result.getClase());
            assertEquals(b_expResult.isEstado(), b_result.isEstado());

            assertEquals(b_expResult.getIdcomplementario(), b_result.getIdcomplementario());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getDescripcion(), b_result.getDescripcion());
            assertEquals(b_expResult.getDireccion(), b_result.getDireccion());
            assertEquals(b_expResult.getTelefono(), b_result.getTelefono());
            assertEquals(b_expResult.getSitio_web(), b_result.getSitio_web());
            assertEquals(b_expResult.getHorario_atencion(), b_result.getHorario_atencion());
            BGeometry geo_expResult = b_expResult.getGeometry();
            BGeometry geo_result = b_result.getGeometry();
            //Geometry
            assertEquals(geo_expResult.getCoordinates()[0], geo_result.getCoordinates()[0], 1e-8);//double1 double 2, and delta
            assertEquals(geo_expResult.getCoordinates()[1], geo_result.getCoordinates()[1], 1e-8);
            //Imagen
            for (int j = 0; j < b_expResult.getImagenes().size() && (b_expResult.getImagenes().size() == b_result.getImagenes().size()); j++) {
                assertEquals(b_expResult.getImagenes().get(j).getIdproducto(), b_result.getImagenes().get(j).getIdproducto());
            }
        }
    }
}