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
public class BRestaurant extends BProducto {

    private String idrestaurant;
    private String categoria;
    private String tipo;
    private String descripcion;
    private String direccion;
    private String telefono;
    private String sitio_web;
    private String horario_atencion;
    private String especialidad;
    private String precio_promedio;
    private String formas_pago;
    private BGeometry geometry;
    private ArrayList<BImagen> imagenes;

    public String getPrecio_promedio() {
        return precio_promedio.trim().replaceAll(" +", " ");
    }

    public void setPrecio_promedio(String precio_promedio) {
        this.precio_promedio = precio_promedio;
    }

    public String getIdrestaurant() {
        return idrestaurant.trim().replaceAll(" +", " ");
    }

    public void setIdrestaurant(String idrestaurant) {
        this.idrestaurant = idrestaurant;
    }

    public String getCategoria() {
        return categoria.trim().replaceAll(" +", " ");
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTipo() {
        return tipo.trim().replaceAll(" +", " ");
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion.trim().replaceAll(" +", " ");
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
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

    public String getEspecialidad() {
        return especialidad.trim().replaceAll(" +", " ");
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getFormas_pago() {
        return formas_pago.trim().replaceAll(" +", " ");
    }

    public void setFormas_pago(String formas_pago) {
        this.formas_pago = formas_pago;
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

        System.out.println("idhotel :" + getIdrestaurant());
        System.out.println("categoria :" + getCategoria());
        System.out.println("tipo :" + getTipo());
        System.out.println("Descripcion :" + getDescripcion());
        System.out.println("direccion :" + getDireccion());
        System.out.println("telefono :" + getTelefono());
        System.out.println("Horario de Atencion :" + getHorario_atencion());
        System.out.println("Especialidad :" + getEspecialidad());
        System.out.println("Precio Promedio :" + getPrecio_promedio());
        System.out.println("formas de Pago :" + getFormas_pago());
        System.out.println("Latitud :" + getGeometry().getLatitud());
        System.out.println("Longitud :" + getGeometry().getLongitud());
        System.out.println("Imagenes" + getImagenes().size());

    }
}
