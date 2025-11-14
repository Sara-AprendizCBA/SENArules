export type Rule = {
id: number
title: string
category: string
description: string
status: 'pending' | 'compliant'
}


export const initialRules: Rule[] = [
{ id: 1, title: 'Uso del uniforme', category: 'Uniforme', description: 'El aprendiz debe portar el uniforme completo y en buen estado durante la jornada formativa.', status: 'pending' },
{ id: 2, title: 'Carné visible', category: 'Identificación', description: 'El carné institucional debe permanecer visible durante actividades académicas y administrativas.', status: 'pending' },
{ id: 3, title: 'Puntualidad', category: 'Asistencia', description: 'Llegar puntualmente a las clases y actividades programadas; las faltas reiteradas serán reportadas.', status: 'pending' },
{ id: 4, title: 'Respeto', category: 'Convivencia', description: 'Mantener trato respetuoso con instructores, compañeros y personal administrativo.', status: 'pending' },
{ id: 5, title: 'Seguridad', category: 'Seguridad', description: 'Seguir las normas de seguridad en talleres y laboratorios; usar EPP cuando aplique.', status: 'pending' },
{ id: 6, title: 'Prohibido fumar', category: 'Convivencia', description: 'No se permite fumar dentro de las instalaciones, excepto en zonas habilitadas (si las hay).', status: 'pending' },
{ id: 7, title: 'Uso de celulares', category: 'Disciplina', description: 'El uso de dispositivos móviles debe ser responsable y no interrumpir el desarrollo de las actividades.', status: 'pending' },
{ id: 8, title: 'Cuidado del mobiliario', category: 'Recursos', description: 'Preservar las instalaciones y reportar daños o anomalías a los responsables.', status: 'pending' },
{ id: 9, title: 'Entrega de trabajos', category: 'Evaluación', description: 'Cumplir fechas de entrega y formato solicitado por el instructor.', status: 'pending' },
{ id: 10, title: 'Participación en clase', category: 'Asistencia', description: 'Participar activamente en actividades y discusiones según lo requiera la programación.', status: 'pending' }
]