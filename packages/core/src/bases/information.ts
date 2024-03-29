// 战舰
interface BattleshipInformation extends Base {
  // 能源物质 (单位重量)
  energy: number;
  // 引擎
  engines: Slot<EngineInformation>[];
  // 炮台 (电磁炮)
  turrets: Slot<EngineInformation>[];
}

// 炮塔
interface TurretsInformation extends Base {
  // 最大功率
  readonly MAX_POWER: number;
}

// 引擎
interface EngineInformation extends Base {
  // (反应堆) 最大功率
  readonly MAX_POWER: number;
  // (电池) 最大储能
  readonly MAX_ENERGY: number;
  // (推力器) 比冲
  readonly SPECIFIC_IMPULSE: number;
}

// 物质的基础属性
interface Base {
  // 重量
  readonly MASS: number;
  // 体积
  readonly SIZE: Size;
}

// 体积
interface Size {
  readonly WIDTH: number;
  readonly HEIGHT: number;
}

// 槽
type Slot<T> = {
  SIZE: Size
  ENTITY?: T;
};