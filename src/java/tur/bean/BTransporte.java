/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

import java.util.ArrayList;

/**
 *
 * @author ruben
 */
public class BTransporte extends BProducto {

    private String idtransporte;
    private String descripcion;
    private String tipo;
    private String direccion;
    private String telefono;
    private String sitio_web;
    private String horario_atencion;
    private String horario_salida;
    private String destinos;
    private BGeometry geometry;
    private ArrayList<BImagen> imagenes;

    public String getIdtransporte() {
        return idtransporte.trim().replaceAll(" +", " ");
    }

    public void setIdtransporte(String idtransporte) {
        this.idtransporte = idtransporte;
    }

    public String getDescripcion() {
        return descripcion.trim().replaceAll(" +", " ");
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTipo() {
        return tipo.trim().replaceAll(" +", " ");
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDireccion() {
        return direccion.trim().replaceAll(" +", " ");
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono.trim().replaceAll(" +", " ");
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getSitio_web() {
        return sitio_web.trim().replaceAll(" +", " ");
    }

    public void setSitio_web(String sitio_web) {
        this.sitio_web = sitio_web;
    }

    public String getHorario_atencion() {
        return horario_atencion.trim().replaceAll(" +", " ");
    }

    public void setHorario_atencion(String horario_atencion) {
        this.horario_atencion = horario_atencion;
    }

    public String getHorario_salida() {
        return horario_salida.trim().replaceAll(" +", " ");
    }

    public void setHorario_salida(String horario_salida) {
        this.horario_salida = horario_salida;
    }

    public String getDestinos() {
        return destinos.trim().replaceAll(" +", " ");
    }

    public void setDestinos(String destinos) {
        this.destinos = destinos;
    }

    public BGeometry getGeometry() {
        return geometry;
    }

    public void setGeometry(BGeometry geometry) {
        this.geometry = geometry;
    }

    public ArrayList<BImagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(ArrayList<BImagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void print() {

        System.out.println("idhotel :" + getIdtransporte());
        System.out.println("Nombre :" + getNombre());
        System.out.println("Descripcion :" + getDescripcion());
        System.out.println("tipo :" + getTipo());
        System.out.println("direccion :" + getDireccion());
        System.out.println("telefono :" + getTelefono());
        System.out.println("Sitio web" + getSitio_web());
        System.out.println("Horario de Atencion :" + getHorario_atencion());
        System.out.println("Horario de salida :" + getHorario_salida());
        System.out.println("Destinos :" + getDestinos());
        System.out.println("Latitud :" + getGeometry().getLatitud());
        System.out.println("Longitud :" + getGeometry().getLongitud());
        System.out.println("Imagenes" + getImagenes().size());

    }
}
