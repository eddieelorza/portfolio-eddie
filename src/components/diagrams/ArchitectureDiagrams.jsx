import { Arrow, Box, DiagramFigure } from "./primitives.jsx";

/**
 * Architecture diagrams drawn from scratch for the project viewer.
 *
 * They replace screenshots of company software: generic role names only
 * (shell, remote, orchestrator, legacy host) — no internal service names,
 * hosts, endpoints or business rules. All copy comes from translations.js
 * (`detail.diagram.labels`), so the drawings are bilingual.
 */

function PagaFacilDiagram({ labels: l }) {
  const id = "dgm-paga-facil";
  const flows = [
    [l.acquirer, l.acquirerSub],
    [l.wallet, l.walletSub],
    [l.gems, l.gemsSub],
    [l.initial, l.initialSub],
  ];
  return (
    <DiagramFigure
      id={id}
      title={l.title}
      description={l.description}
      note={l.note}
      width={820}
      height={440}
    >
      {/* Cómo llega el usuario */}
      <Box x={16} y={40} w={162} h={60} title={l.link} sub={l.linkSub} />
      <Box x={16} y={120} w={162} h={60} title={l.url} sub={l.urlSub} />
      <Box
        x={16}
        y={200}
        w={162}
        h={60}
        title={l.platforms}
        sub={l.platformsSub}
      />
      <Arrow id={id} from={[182, 70]} to={[206, 120]} />
      <Arrow id={id} from={[182, 150]} to={[206, 150]} />
      <Arrow id={id} from={[182, 230]} to={[206, 180]} />

      {/* La PWA: un solo microfrontend */}
      <Box
        x={208}
        y={96}
        w={170}
        h={108}
        title={l.pwa}
        sub={l.pwaSub}
        sub2={l.pwaSub2}
        tone="accent"
      />
      <Arrow id={id} from={[382, 150]} to={[406, 150]} />

      {/* Detección del flujo */}
      <Box x={408} y={120} w={150} h={60} title={l.router} sub={l.routerSub} />

      {/* Los cuatro flujos */}
      {flows.map(([title, sub], i) => (
        <Box
          key={title}
          x={590}
          y={16 + i * 78}
          w={214}
          h={62}
          title={title}
          sub={sub}
          tone="accent"
        />
      ))}
      <Arrow id={id} from={[562, 138]} to={[588, 47]} />
      <Arrow id={id} from={[562, 146]} to={[588, 125]} />
      <Arrow id={id} from={[562, 154]} to={[588, 203]} />
      <Arrow id={id} from={[562, 162]} to={[588, 281]} />

      {/* Cierre */}
      <Box
        x={408}
        y={344}
        w={396}
        h={68}
        title={l.apply}
        sub={l.applySub}
        sub2={l.applySub2}
      />
      <Arrow id={id} from={[697, 316]} to={[648, 342]} dashed />
      <Arrow
        id={id}
        from={[406, 378]}
        to={[293, 206]}
        label={l.receipt}
        labelAt="below"
      />
    </DiagramFigure>
  );
}

function RegionalDiagram({ labels: l }) {
  const id = "dgm-regional";
  const mine = [l.portfolio, l.credit, l.users];
  return (
    <DiagramFigure
      id={id}
      title={l.title}
      description={l.description}
      note={l.note}
      width={790}
      height={446}
    >
      {/* The core is a provider, not a host: it publishes the shared base and
          each microfrontend consumes it at runtime. */}
      <Box
        x={16}
        y={40}
        w={186}
        h={96}
        title={l.shell}
        sub={l.shellSub}
        sub2={l.shellSub2}
        tone="accent"
      />
      <Arrow id={id} from={[206, 88]} to={[250, 88]} label={l.provides} />

      {/* The legacy platform shows the modules; the drawing keeps that link at
          module level, which is where the evidence is. */}
      <Box x={16} y={256} w={186} h={84} title={l.legacy} sub={l.legacySub} />
      <Arrow id={id} from={[206, 298]} to={[250, 298]} both label={l.iframe} />

      {/* Remotes: three mine, one that belongs to the system */}
      <Box
        x={252}
        y={16}
        w={216}
        h={392}
        title={l.remotes}
        sub={l.remotesSub}
        tone="group"
      />
      {mine.map((name, i) => (
        <Box
          key={name}
          x={268}
          y={76 + i * 68}
          w={184}
          h={54}
          title={name}
          sub={l.mine}
          tone="accent"
        />
      ))}
      <Box
        x={268}
        y={310}
        w={184}
        h={54}
        title={l.applications}
        sub={l.context}
        tone="context"
      />

      {/* Data and the infrastructure layer */}
      <Box x={518} y={140} w={216} h={64} title={l.apis} sub={l.apisSub} />
      <Box
        x={518}
        y={256}
        w={216}
        h={84}
        title={l.ingress}
        sub={l.ingressSub}
        sub2={l.ingressSub2}
      />
      <Arrow id={id} from={[470, 172]} to={[516, 172]} both />
      <Arrow
        id={id}
        from={[516, 298]}
        to={[470, 298]}
        dashed
        label={l.routes}
      />

      {/* Legend: what the drawing claims as the author's work */}
      <g>
        <rect
          x={252}
          y={422}
          width={12}
          height={12}
          rx="3"
          fill="rgb(var(--accent) / 0.1)"
          stroke="rgb(var(--accent-soft))"
          strokeWidth="1.5"
        />
        <text x={270} y={432} fill="rgb(var(--fg) / 0.72)" fontSize="11">
          {l.mine}
        </text>
        <rect
          x={400}
          y={422}
          width={12}
          height={12}
          rx="3"
          fill="rgb(var(--ink-900))"
          stroke="rgb(var(--fg) / 0.25)"
          strokeDasharray="5 4"
        />
        <text x={418} y={432} fill="rgb(var(--fg) / 0.72)" fontSize="11">
          {l.context}
        </text>
      </g>
    </DiagramFigure>
  );
}

function TastifyDiagram({ labels: l }) {
  const id = "dgm-tastify";
  return (
    <DiagramFigure
      id={id}
      title={l.title}
      description={l.description}
      note={l.note}
      width={820}
      height={430}
    >
      {/* Navegador */}
      <Box x={12} y={28} w={214} h={166} title={l.browser} tone="group" />
      <Box
        x={28}
        y={68}
        w={182}
        h={52}
        title={l.diner}
        sub={l.dinerSub}
        tone="accent"
      />
      <Box
        x={28}
        y={130}
        w={182}
        h={52}
        title={l.panel}
        sub={l.panelSub}
        tone="accent"
      />

      {/* Supabase */}
      <Box x={286} y={28} w={330} h={366} title={l.platform} tone="group" />
      <Box x={302} y={68} w={298} h={46} title={l.auth} sub={l.authSub} />
      <Box
        x={302}
        y={132}
        w={298}
        h={62}
        title={l.db}
        sub={l.dbSub}
        sub2={l.dbSub2}
      />
      <Box
        x={302}
        y={212}
        w={142}
        h={58}
        title={l.realtime}
        sub={l.realtimeSub}
      />
      <Box
        x={458}
        y={212}
        w={142}
        h={58}
        title={l.storage}
        sub={l.storageSub}
      />
      <Box
        x={302}
        y={294}
        w={298}
        h={58}
        title={l.edge}
        sub={l.edgeSub}
        sub2={l.edgeSub2}
      />

      {/* Modelo */}
      <Box
        x={634}
        y={294}
        w={172}
        h={58}
        title={l.model}
        sub={l.modelSub}
        tone="context"
      />

      {/* Llamadas de las apps a la plataforma */}
      <Arrow id={id} from={[212, 92]} to={[300, 90]} label={l.key} />
      <Arrow
        id={id}
        from={[212, 154]}
        to={[300, 155]}
        label={l.rpc}
        labelAt="below"
      />

      {/* Realtime devuelve a las dos apps */}
      <Arrow
        id={id}
        from={[300, 240]}
        to={[128, 196]}
        dashed
        label={l.invalidate}
      />

      {/* La base alimenta realtime; edge escribe con rol de servicio */}
      <Arrow id={id} from={[373, 198]} to={[373, 210]} />
      <Arrow id={id} from={[451, 292]} to={[451, 198]} />
      <Arrow id={id} from={[602, 323]} to={[632, 323]} />
    </DiagramFigure>
  );
}

function TastifyRoundDiagram({ labels: l }) {
  const id = "dgm-tastify-ronda";
  const states = [l.received, l.preparing, l.ready, l.delivered];
  return (
    <DiagramFigure
      id={id}
      title={l.title}
      description={l.description}
      note={l.note}
      width={800}
      height={250}
    >
      <Box
        x={12}
        y={24}
        w={190}
        h={64}
        title={l.scan}
        sub={l.scanSub}
        tone="accent"
      />
      <Box x={232} y={24} w={190} h={64} title={l.cart} sub={l.cartSub} />
      <Box
        x={452}
        y={24}
        w={190}
        h={64}
        title={l.submit}
        sub={l.submitSub}
        tone="accent"
      />
      <Box x={672} y={24} w={176} h={64} title={l.board} sub={l.boardSub} />
      <Arrow id={id} from={[206, 56]} to={[228, 56]} />
      <Arrow id={id} from={[426, 56]} to={[448, 56]} />
      <Arrow id={id} from={[646, 56]} to={[668, 56]} />

      {states.map((state, i) => (
        <Box
          key={state}
          x={12 + i * 220}
          y={150}
          w={190}
          h={46}
          title={state}
        />
      ))}
      {states.slice(0, -1).map((state, i) => (
        <Arrow
          key={state}
          id={id}
          from={[206 + i * 220, 173]}
          to={[228 + i * 220, 173]}
        />
      ))}
      <Arrow id={id} from={[760, 92]} to={[760, 148]} label={l.stateLabel} />
      <Arrow
        id={id}
        from={[107, 148]}
        to={[107, 92]}
        dashed
        label={l.backToPhone}
      />
    </DiagramFigure>
  );
}

function OctobileMapDiagram({ labels: l }) {
  const id = "dgm-octobile";
  const alta = [l.account, l.phone, l.code, l.profile];
  const tabs = [
    [l.states, l.statesSub],
    [l.chats, l.chatsSub],
    [l.rooms, l.roomsSub],
  ];
  const acciones = [l.call, l.video, l.camera, l.files, l.poll];
  return (
    <DiagramFigure
      id={id}
      title={l.title}
      description={l.description}
      note={l.note}
      width={820}
      height={400}
    >
      {/* alta de cuenta: cuatro pasos y tres validaciones */}
      <Box
        x={12}
        y={16}
        w={796}
        h={120}
        title={l.signupTitle}
        sub={l.signupSub}
        tone="group"
      />
      {alta.map((title, i) => (
        <Box key={title} x={30 + i * 195} y={68} w={170} h={48} title={title} />
      ))}
      {alta.slice(0, -1).map((title, i) => (
        <Arrow
          key={`s-${title}`}
          id={id}
          from={[200 + i * 195, 92]}
          to={[224 + i * 195, 92]}
        />
      ))}

      {/* la aplicación: tres secciones */}
      <Box x={12} y={152} w={478} h={150} title={l.appTitle} tone="group" />
      {tabs.map(([title, sub], i) => (
        <Box
          key={title}
          x={28}
          y={190 + i * 36}
          w={446}
          h={32}
          title={`${title} · ${sub}`}
          align="start"
        />
      ))}

      {/* acciones desde un chat */}
      <Box
        x={504}
        y={152}
        w={304}
        h={150}
        title={l.actionsTitle}
        tone="group"
      />
      {acciones.map((title, i) => (
        <Box
          key={title}
          x={520 + (i % 2) * 140}
          y={190 + Math.floor(i / 2) * 36}
          w={132}
          h={32}
          title={title}
          tone="accent"
        />
      ))}

      {/* dónde corre */}
      <Box
        x={12}
        y={322}
        w={796}
        h={58}
        title={l.platforms}
        sub={l.platformsSub}
        tone="context"
      />
      <Arrow id={id} from={[251, 304]} to={[251, 320]} />
      <Arrow id={id} from={[656, 304]} to={[656, 320]} />
      <Arrow id={id} from={[410, 138]} to={[410, 150]} />
    </DiagramFigure>
  );
}

const DIAGRAMS = {
  "paga-facil": PagaFacilDiagram,
  "sistema-regional": RegionalDiagram,
  tastify: TastifyDiagram,
  "tastify-ronda": TastifyRoundDiagram,
  octobile: OctobileMapDiagram,
};

export default function ArchitectureDiagram({ diagram, diagrams }) {
  const list = diagrams?.length ? diagrams : diagram ? [diagram] : [];
  const drawn = list.filter((item) => DIAGRAMS[item.id]);
  if (drawn.length === 0) return null;
  return (
    <div className="space-y-8">
      {drawn.map((item) => {
        const Diagram = DIAGRAMS[item.id];
        return <Diagram key={item.id} labels={item.labels} />;
      })}
    </div>
  );
}
