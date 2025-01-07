import "@typespec/http";

using TypeSpec.Http;

model Agent {
  name: string;
  age: int16;
}

@route("/agents")
interface Agents {
  list(@query filter: string): Agent[];
  read(@path id: Agent): Agent;
}