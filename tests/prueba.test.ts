import { describe, it, expect, beforeEach } from "vitest";
import { Logger } from "../src/practica-clase/prueba1.js"
import { data } from "../src/practica-clase/prueba.js";

describe("", () => {
  let logger: Logger;

  beforeEach(() => {
    logger = Logger.getInstance(); 
    logger.setData([]);
  });

  it("", () => {
    const logger2 = Logger.getInstance();
    expect(logger).toBe(logger2); 
  });

  it("Obtener fechas", () => {
    const action: data = { usuario: "Adrian", accion: "Login", fecha: new Date() };
    logger.addAction(action);
    expect(logger.getData().length).toBe(1); 
    expect(logger.getData()[0]).toEqual(action); 
  });

  it("Añadir datos ", () => {
    const action1: data = { usuario: "Adrian", accion: "Login", fecha: new Date() };
    const action2: data = { usuario: "Pedro", accion: "Logout", fecha: new Date() };
    logger.addAction(action1);
    logger.addAction(action2);

    const result = logger.getUsuarios("Adrian");
    expect(result.length).toBe(1); 
    expect(result[0]).toEqual(action1); 
  });

  it("Añadir datos", () => {
    const action1: data = { usuario: "Adrian", accion: "Login", fecha: new Date() };
    const action2: data = { usuario: "Pedro", accion: "Logout", fecha: new Date() };
    logger.addAction(action1);
    logger.addAction(action2);

    const result = logger.getAcciones("Login");
    expect(result.length).toBe(1); 
    expect(result[0]).toEqual(action1); 
  });

  it("Modificar valores", () => {
    const actions: data[] = [
      { usuario: "Adrian", accion: "Login", fecha: new Date() },
      { usuario: "Pedro", accion: "Logout", fecha: new Date() },
    ];
    logger.setData(actions);
    expect(logger.getData()).toEqual(actions); 
  });

  it("Obtener datosz", () => {
    expect(logger.getData().length).toBe(0); 
  });
});
