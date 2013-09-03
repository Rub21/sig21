/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javazoom.upload.*;
import org.apache.commons.fileupload.FileUploadException;
import tur.bean.BGeometry;
import tur.bean.BRecurso;
import tur.bean.BImagen;
import tur.bean.BRecurso_Transporte;
import tur.datasource.BDConnecion;
import tur.manager.ManagerProducto;
import tur.manager.ManagerRecurso;

/**
 *
 * @author ruben
 *
 */
public class SRegistrarRecurso extends HttpServlet {

    ManagerProducto managerProducto = null;
    ManagerRecurso managerrecurso = null;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, FileUploadException, Exception {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        //declarte connecion to data base and context
        ServletContext ctx = this.getServletConfig().getServletContext();
        HttpSession sesion = request.getSession();
        BDConnecion conexion_producto = new BDConnecion(ctx);
        BDConnecion conexion = new BDConnecion(ctx);

        //manager adn bean
        managerProducto = new ManagerProducto(conexion_producto);
        managerrecurso = new ManagerRecurso(conexion);

        BRecurso bRecurso = new BRecurso();
        BImagen bImagen;// = new BImagen();
        BGeometry bGeometry = new BGeometry();


        UploadBean upBean;
        //clases for upload images
        upBean = new UploadBean();
        String direccion = request.getSession().getServletContext().getRealPath("imagenesDB/");
        upBean.setFolderstore(direccion);

        MultipartFormDataRequest mrequest = new MultipartFormDataRequest(request);

        mrequest.DEFAULTENCODING = "ISO-8859-1";

        java.text.SimpleDateFormat formato = new java.text.SimpleDateFormat("yyMMddHHmmss");//fecha        
        Hashtable files = mrequest.getFiles();


        //get the last id
        String id = managerProducto.getlast() + "p";//id=idproducto
        String idrecurso = id + "r";
        String clase = "Recurso Turístico";
        Boolean estado = true;


        try {
            //Datos Producto
            bRecurso.setIdproducto(id);
            bRecurso.setNombre(mrequest.getParameter("nombre"));
            bRecurso.setClase(clase);
            bRecurso.setEstado(estado);

            //Datos Recurso Turistico

            bRecurso.setIdrecurso(idrecurso);

            bRecurso.setCategoria(mrequest.getParameter("categoria"));

            bRecurso.setTipo(mrequest.getParameter("tipo"));
            bRecurso.setDescripcion(mrequest.getParameter("descripcion"));
            bRecurso.setHistoria(mrequest.getParameter("historia"));
            bRecurso.setCorredor(mrequest.getParameter("corredor"));

            bRecurso.setFecha(mrequest.getParameter("fecha"));

            bRecurso.setDistancia(mrequest.getParameter("distancia"));
            bRecurso.setTipo_precio_ing(mrequest.getParameter("costo_de_ingreso"));
            bRecurso.setHorario_atencion(mrequest.getParameter("horario_de_atencion"));
            bRecurso.setTemperatura(mrequest.getParameter("temperatura"));
            bRecurso.setAltitud(mrequest.getParameter("altitud"));
            bRecurso.setVideo(mrequest.getParameter("video"));
            bRecurso.setComo_llegar(mrequest.getParameter("como_llegar"));

            //transporte
            ArrayList<BRecurso_Transporte> listtrasporte = new ArrayList<BRecurso_Transporte>();

            int num_transporte = Integer.parseInt(mrequest.getParameter("num_selected"));
            for (int i = 0; i < num_transporte; i++) {
                BRecurso_Transporte bRecurso_Transporte = new BRecurso_Transporte();
                bRecurso_Transporte.setIdtransporte(mrequest.getParameter("t" + i));
                listtrasporte.add(bRecurso_Transporte);
            }

            bRecurso.setTransporte(listtrasporte);

            // Geometry          
            bGeometry.setLatitud(Double.parseDouble(mrequest.getParameter("lat")));
            bGeometry.setLongitud(Double.parseDouble(mrequest.getParameter("lon")));
            bGeometry.setIdproducto(id);

            bRecurso.setGeometry(bGeometry);



            //imagen
            String url_img = "";
            ArrayList<BImagen> listImagenes = new ArrayList<BImagen>();
            for (int i = 1;
                    i
                    <= files.size();
                    i++) {
                bImagen = new BImagen();

                String archivo = ((UploadFile) mrequest.getFiles().get("file" + i)).getFileName();
                int posicionPunto = archivo.indexOf(".");
                String nombreImagen = archivo.substring(0, posicionPunto);
                nombreImagen = nombreImagen + formato.format(new java.util.Date());
                String extension = archivo.substring(posicionPunto);
                nombreImagen = nombreImagen.replaceAll("\\s", "") + extension;

                //Fill bImagen
                //bImagen.setId(id);
                bImagen.setUrl(nombreImagen);
                /*bImagen.setTitulo(mrequest.getParameter("title_img" + i));
                 bImagen.setDescripcion(mrequest.getParameter("description_img" + i));*/
                bImagen.setIdproducto(id);

                ((UploadFile) mrequest.getFiles().get("file" + i)).setFileName(nombreImagen);
                UploadFile file = (UploadFile) files.get("file" + i);
                upBean.store(mrequest, "file" + i);
                //System.out.println(" file names" + i + " " + file.getFileName());
                //lista de imagenes
                listImagenes.add(bImagen);

            }

            bRecurso.setImagenes(listImagenes);
            bRecurso.print();
            managerrecurso.registrarrecurso(bRecurso);
            
            response.sendRedirect("admin/confirm.html");
            
        } catch (Exception ex) {
            request.setAttribute("message", "There was an error: " + ex.getMessage());
            System.out.println(ex.getMessage());
            System.out.println("error");
        } finally {
            out.close();
        }

    }
// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">

    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);




        } catch (FileUploadException ex) {
            Logger.getLogger(SRegistrarRecurso.class
                    .getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(SRegistrarRecurso.class
                    .getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);

            //getServletContext().getRequestDispatcher("/message.jsp").forward(request, response);




        } catch (FileUploadException ex) {
            Logger.getLogger(SRegistrarRecurso.class
                    .getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(SRegistrarRecurso.class
                    .getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
