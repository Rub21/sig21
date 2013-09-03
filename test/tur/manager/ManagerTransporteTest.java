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
import tur.bean.BTransporte;
import tur.datasource.BDConnecion;

/**
 *
 * @author ruben
 */
public class ManagerTransporteTest {

    public ManagerTransporteTest() {
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
     * Test of registrartransporte method, of class ManagerTransporte.
     */
    /* @Test
     public void testRegistrartransporte() {
     System.out.println("registrartransporte");
     BTransporte bTransporte = null;
     ManagerTransporte instance = null;
     instance.registrartransporte(bTransporte);
     // TODO review the generated test code and remove the default call to fail.
     fail("The test case is a prototype.");
     }
     */
    /**
     * Test of listarTransporte method, of class ManagerTransporte.
     */
    @Test
    public void testListarTransporte() {


        List<BTransporte> listTransporte = new LinkedList<BTransporte>();
        BTransporte bTransporte = new BTransporte();
        //Producto
        bTransporte.setIdproducto("4p");
        bTransporte.setNombre("Empresa de Transporte Etuscia");
        bTransporte.setClase("Transporte");
        bTransporte.setEstado(true);


        bTransporte.setIdtransporte("4pt");
        bTransporte.setDescripcion("Es una empresa que realiza la ruta cotidiana de Ayacucho a Quinua y Quina a Ayacucho");
        bTransporte.setTipo("Interdistrital");
        bTransporte.setDireccion("Paradero hacia el norte, Cuadra 1 de la Av. Salvador Cavero");
        bTransporte.setTelefono("966589865");
        bTransporte.setHorario_atencion("Lunes a domingo de 6 am a 8pm");
        bTransporte.setHorario_salida("Salidas diarias cada 30 minutos");
        bTransporte.setDestinos("Muyurina, Pacaycasa y Quinua");

        //Geometry
        BGeometry bGeometry = new BGeometry();
        bGeometry.setLatitud(-13.15829);
        bGeometry.setLongitud(-74.2179);
        bGeometry.setCoordinates();
        bTransporte.setGeometry(bGeometry);
        //Imagen
        ArrayList<BImagen> list_imagen = new ArrayList<BImagen>();
        String id = "4p";
        BImagen bImagen1 = new BImagen();
        bImagen1.setUrl("Etuscia130903093259.jpg");
        bImagen1.setIdproducto(id);
        list_imagen.add(bImagen1);

        bTransporte.setImagenes(list_imagen);
        //Array Transporte
        listTransporte.add(bTransporte);


        BDConnecion conexion = new BDConnecion();
        conexion.getConnection();

        ManagerTransporte instance = null;
        instance = new ManagerTransporte(conexion);

        List expResult = listTransporte;

        List result = instance.listarTransporte();


        for (int i = 0; i < expResult.size() && expResult.size() == result.size(); i++) {

            BTransporte b_expResult = (BTransporte) expResult.get(i);
            BTransporte b_result = (BTransporte) result.get(i);

            assertEquals(b_expResult.getIdproducto(), b_result.getIdproducto());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getClase(), b_result.getClase());
            assertEquals(b_expResult.isEstado(), b_result.isEstado());

            assertEquals(b_expResult.getIdtransporte(), b_result.getIdtransporte());
            assertEquals(b_expResult.getDescripcion(), b_result.getDescripcion());
            assertEquals(b_expResult.getTipo(), b_result.getTipo());
            assertEquals(b_expResult.getDireccion(), b_result.getDireccion());
            assertEquals(b_expResult.getTelefono(), b_result.getTelefono());

            assertEquals(b_expResult.getHorario_atencion(), b_result.getHorario_atencion());
            assertEquals(b_expResult.getHorario_salida(), b_result.getHorario_salida());
            assertEquals(b_expResult.getDestinos(), b_result.getDestinos());

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
