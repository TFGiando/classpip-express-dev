import { Nivel } from './Nivel';

export class Juego {
  tipo: string;
  modo: string;
  asignacion: string;
  juegoActivo: boolean;
  grupoId: number;
  id: number;
  numeroTotalJornadas: number;
  coleccionId: number;
  tipoJuegoCompeticion: string;
  numeroParticipantesPuntuan: number;
  puntos: number[];
  nombreJuego: string;
  puntuacionCorrecta: number;
  puntuacionIncorrecta: number;
  presentacion: string;
  juegoTerminado: boolean;
  profesorId: number;
  cuestionarioId: number;
  puntuacionCorrectaBonus: number;
  puntuacionIncorrectaBonus: number;
  preguntasBasicas: number[];
  preguntasBonus: number[];
  idescenario: number;

  tiempoLimite: number; // para el juego de cuestionario


  

  constructor(Tipo?: string, Modo?: string, Asignacion?: string, coleccionId?: number, JuegoActivo?: boolean,
    NumeroTotalJornadas?: number, TipoJuegoCompeticion?: string, NumeroParticipantesPuntuan?: number,
    Puntos?: number[], NombreJuego?: string, PuntuacionCorrecta?: number, PuntuacionIncorrecta?: number, 
    Presentacion?: string, JuegoTermiando?: boolean, profesorId?: number, cuestionarioId?: number, PuntuacionCorrectaBonus?: number, PuntuacionIncorrectaBonus?: number,
    PreguntasBasicas?: number[], PreguntasBonus?: number[], idescenario?: number,
    TiempoLimite?: number)  {


    this.tipo = Tipo;
    this.modo = Modo;
    this.asignacion = Asignacion;
    this.juegoActivo = JuegoActivo;
    this.coleccionId = coleccionId;
    this.numeroTotalJornadas = NumeroTotalJornadas;
    this.tipoJuegoCompeticion = TipoJuegoCompeticion;
    this.numeroParticipantesPuntuan = NumeroParticipantesPuntuan;
    this.puntos = Puntos;
    this.nombreJuego = NombreJuego;
    this.puntuacionCorrecta = PuntuacionCorrecta;
    this.puntuacionIncorrecta = PuntuacionIncorrecta;
    this.presentacion = Presentacion;
    this.juegoTerminado = JuegoTermiando;
    this.profesorId = profesorId;
    this.cuestionarioId = cuestionarioId;
    this.puntuacionCorrectaBonus = PuntuacionCorrectaBonus;
    this.puntuacionIncorrectaBonus = PuntuacionIncorrectaBonus;
    this.preguntasBasicas = PreguntasBasicas;
    this.preguntasBonus = PreguntasBonus;
    this.idescenario = idescenario;

    this.tiempoLimite = TiempoLimite;
  }
}
