/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

/**
 *
 * @author ruben
 */
public class BServiciosAdicional {

    private String tipo;
    private String idproducto;

    public String getIdproducto() {
        return idproducto.trim().replaceAll(" +", " ");
    }

    public void setIdproducto(String iproducto) {
        this.idproducto = iproducto;
    }

    public String getTipo() {
        return tipo.trim().replaceAll(" +", " ");
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
