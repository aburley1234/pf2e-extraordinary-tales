import ExtraTalesCore from "../core.js";
import ExtraTalesConfigure from "./configure.js";
import ExtraTalesEditor from "./editor.js";

export default class ExtraTalesEzUi extends Application {

    constructor() {
        super();

        this._overrideClose = false;

        this._collapsed = false;

        Hooks.on("updateActor", async (data, update, options, userid) => {
            const allpcs = game.users
                .filter(i => i.role >= 1 && i.character)
                .map(i => i.character)
                .map(i => i.id);

            if (allpcs.includes(data.id)) {
                this.render(true);
            }
        });

        Hooks.on("renderChatLog", (app, data, html) => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("chatMessage", (app, msg, data) => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("createChatMessage", () => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("updateChatMessage", (doc, change, options, userId) => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("renderChatMessage", (doc, change, options, userId) => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("deleteChatMessage", (doc, options, userId) => {
            setTimeout(async () => {
                this.render(true);
            }, 50);
        });

        Hooks.on("controlToken", async (token, selected) => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("canvasReady", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("updateCombat", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("deleteCombat", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("createCombat", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("createCombatant", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("deleteCombatant", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("updateCombatant", () => {
            setTimeout(async () => {
                await this.render(true);
            }, 50);
        });

        Hooks.on("collapseSidebar", (sidebar, collapsed) => {
            this._collapsed = collapsed;
            this.render(true);
        });

         // copy and paste from workbench lmaooo
         const MODULENAME = "xdy-pf2e-workbench";

        this._actions =  [
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.AdministerFirstAidStabilize`),
            //     skill: "Medicine",
            //     action: "game.pf2e.actions.administerFirstAid({ event: event, variant: 'stabilize' });",
            //     icon: "systems/pf2e/icons/features/feats/treat-wounds.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.AdministerFirstAidStopBleeding`),
            //     skill: "Medicine",
            //     action: "game.pf2e.actions.administerFirstAid({ event: event, variant: 'stopBleeding' });",
            //     icon: "systems/pf2e/icons/conditions/persistent-damage.webp",
            // },
            // {
            //     actionType: "other",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.AidToggle`),
            //     skill: "",
            //     action: ["macroEffectAid", "xdy-pf2e-workbench.xdy-internal-utility-macros"],
            //     icon: "systems/pf2e/icons/spells/efficient-apport.webp",
            // },
            {
                actionType: "other",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.AvoidNotice`),
                skill: "Stealth",
                action: game.pf2e.actions.avoidNotice,
                icon: "systems/pf2e/icons/features/classes/surprice-attack.webp",
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Balance`),
                skill: "Acrobatics",
                action: game.pf2e.actions.balance,
                icon: "icons/skills/movement/feet-winged-boots-brown.webp",
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Climb`),
                skill: "Athletics",
                action: game.pf2e.actions.climb,
                icon: "icons/sundries/misc/ladder.webp",
            },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Coerce`),
            //     skill: "Intimidation",
            //     action: game.pf2e.actions.coerce,
            //     icon: "icons/skills/melee/unarmed-punch-fist.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.CommandAnAnimal`),
            //     skill: "Nature",
            //     action: game.pf2e.actions.commandAnAnimal,
            //     icon: "icons/environment/creatures/horse-white.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.ConcealAnObject`),
            //     skill: "Stealth",
            //     action: game.pf2e.actions.concealAnObject,
            //     icon: "systems/pf2e/icons/equipment/adventuring-gear/wax-key-blank.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Craft`),
            //     skill: "Crafting",
            //     action: game.pf2e.actions.craft,
            //     icon: "icons/skills/trades/smithing-anvil-silver-red.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.CreateForgery`),
            //     skill: "Society",
            //     action: game.pf2e.actions.createForgery,
            //     icon: "systems/pf2e/icons/spells/transcribe-moment.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.CreateADiversionGesture`),
            //     skill: "Deception",
            //     action: "game.pf2e.actions.createADiversion({ event: event, variant: 'gesture' });",
            //     icon: "icons/skills/social/wave-halt-stop.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.CreateADiversionTrick`),
            //     skill: "Deception",
            //     action: "game.pf2e.actions.createADiversion({ event: event, variant: 'trick' });",
            //     icon: "systems/pf2e/icons/spells/charming-words.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.DecipherWritingArcana`),
            //     skill: "Arcana",
            //     action: game.pf2e.actions.decipherWriting,
            //     icon: "icons/skills/trades/academics-book-study-runes.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.DecipherWritingOccultism`),
            //     skill: "Occultism",
            //     action: game.pf2e.actions.decipherWriting,
            //     icon: "icons/skills/trades/academics-book-study-purple.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.DecipherWritingReligion`),
            //     skill: "Religion",
            //     action: game.pf2e.actions.decipherWriting,
            //     icon: "systems/pf2e/icons/equipment/other/spellbooks/thresholds-of-truth.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.DecipherWritingSociety`),
            //     skill: "Society",
            //     action: game.pf2e.actions.decipherWriting,
            //     icon: "icons/skills/trades/academics-study-reading-book.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Demoralize`),
                skill: "Intimidation",
                action: game.pf2e.actions.demoralize,
                icon: "icons/skills/social/intimidation-impressing.webp",
            },
            {
                actionType: "skill_trained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Disarm`),
                skill: "Athletics",
                action: game.pf2e.actions.disarm,
                icon: "icons/skills/melee/sword-damaged-broken-glow-red.webp",
                showMAP: true,
            },
            {
                actionType: "skill_trained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.DisableDevice`),
                skill: "Thievery",
                action: game.pf2e.actions.disableDevice,
                icon: "systems/pf2e/icons/equipment/adventuring-gear/thieves-tools.webp",
            },
            {
                actionType: "skill_trained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Feint`),
                skill: "Deception",
                action: game.pf2e.actions.feint,
                icon: "icons/skills/melee/maneuver-sword-katana-yellow.webp",
            },
            // {
            //     actionType: "other",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.FollowTheExpertToggle`),
            //     skill: "",
            //     action: ["macroEffectFollowTheExpert", "xdy-pf2e-workbench.xdy-internal-utility-macros"],
            //     icon: "systems/pf2e/icons/spells/favorable-review.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.ForceOpen`),
            //     skill: "Athletics",
            //     action: game.pf2e.actions.forceOpen,
            //     icon: "icons/equipment/feet/boots-armored-steel.webp",
            //     showMAP: true,
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.GatherInformation`),
            //     skill: "Diplomacy",
            //     action: game.pf2e.actions.gatherInformation,
            //     icon: "icons/skills/social/diplomacy-handshake.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Grapple`),
                skill: "Athletics",
                action: game.pf2e.actions.grapple,
                icon: "icons/skills/melee/unarmed-punch-fist.webp",
                showMAP: true,
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Hide`),
                skill: "Stealth",
                action: game.pf2e.actions.hide,
                icon: "icons/magic/nature/stealth-hide-eyes-green.webp",
            },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Impersonate`),
            //     skill: "Deception",
            //     action: game.pf2e.actions.impersonate,
            //     icon: "icons/equipment/head/mask-carved-scream-tan.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.JumpHigh`),
            //     skill: "Athletics",
            //     action: game.pf2e.actions.highJump,
            //     icon: "icons/skills/movement/arrows-up-trio-red.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.JumpLong`),
            //     skill: "Athletics",
            //     action: game.pf2e.actions.longJump,
            //     icon: "icons/skills/movement/figure-running-gray.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Lie`),
                skill: "Deception",
                action: game.pf2e.actions.lie,
                icon: "icons/magic/control/mouth-smile-deception-purple.webp",
            },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.MakeAnImpression`),
            //     skill: "Diplomacy",
            //     action: game.pf2e.actions.makeAnImpression,
            //     icon: "icons/environment/people/commoner.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.ManeuverInFlight`),
            //     skill: "Acrobatics",
            //     action: game.pf2e.actions.maneuverInFlight,
            //     icon: "icons/commodities/biological/wing-bird-white.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.PalmAnObject`),
            //     skill: "Thievery",
            //     action: game.pf2e.actions.palmAnObject,
            //     icon: "systems/pf2e/icons/spells/efficient-apport.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Perform`),
                skill: "Performance",
                action: game.pf2e.actions.perform,
                icon: "icons/skills/trades/music-singing-voice-blue.webp",
                extra: "singing",
            },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.PickALock`),
            //     skill: "Thievery",
            //     action: game.pf2e.actions.pickALock,
            //     icon: "icons/skills/social/theft-pickpocket-bribery-brown.webp",
            // },
            // {
            //     actionType: "other",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.RaiseAShieldToggle`),
            //     skill: "",
            //     action: game.pf2e.actions.raiseAShield,
            //     icon: "systems/pf2e/icons/actions/raise-a-shield.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.RecallKnowledge`),
            //     skill: "",
            //     action: ["XDY DO_NOT_IMPORT Recall_Knowledge", "xdy-pf2e-workbench.asymonous-benefactor-macros-internal"],
            //     icon: "icons/skills/trades/academics-study-reading-book.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Repair`),
                skill: "Crafting",
                action: game.pf2e.actions.repair,
                icon: "icons/tools/smithing/anvil.webp",
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Request`),
                skill: "Diplomacy",
                action: game.pf2e.actions.request,
                icon: "icons/skills/social/thumbsup-approval-like.webp",
            },
            {
                actionType: "basic",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Seek`),
                skill: "Perception",
                action: game.pf2e.actions.seek,
                icon: "icons/tools/scribal/magnifying-glass.webp",
            },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.SenseDirection`),
            //     skill: "Survival",
            //     action: game.pf2e.actions.senseDirection,
            //     icon: "icons/tools/navigation/compass-brass-blue-red.webp",
            // },
            {
                actionType: "basic",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.SenseMotive`),
                skill: "Perception",
                action: game.pf2e.actions.senseMotive,
                icon: "icons/environment/people/commoner.webp",
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Shove`),
                skill: "Athletics",
                action: game.pf2e.actions.shove,
                icon: "systems/pf2e/icons/spells/hydraulic-push.webp",
                showMAP: true,
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Sneak`),
                skill: "Stealth",
                action: game.pf2e.actions.sneak,
                icon: "systems/pf2e/icons/conditions/unnoticed.webp",
            },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Squeeze`),
            //     skill: "Acrobatics",
            //     action: game.pf2e.actions.squeeze,
            //     icon: "icons/commodities/tech/claw-mechanical.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Steal`),
            //     skill: "Thievery",
            //     action: game.pf2e.actions.steal,
            //     icon: "icons/containers/bags/coinpouch-gold-red.webp",
            // },
            // {
            //     actionType: "skill_untrained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.SubsistSociety`),
            //     skill: "Society",
            //     action: game.pf2e.actions.subsist,
            //     icon: "icons/environment/settlement/building-rubble.webp",
            // },
            // {
            //     actionType: "basic",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.SubsistSurvival`),
            //     skill: "Survival",
            //     action: game.pf2e.actions.subsist,
            //     icon: "icons/environment/wilderness/camp-improvised.webp",
            // },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Swim`),
                skill: "Athletics",
                action: game.pf2e.actions.swim,
                icon: "icons/creatures/fish/fish-shark-swimming.webp",
            },
            // {
            //     actionType: "other",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.TakeCoverToggle`),
            //     skill: "",
            //     action: ["macroEffectCover", "xdy-pf2e-workbench.xdy-internal-utility-macros"],
            //     icon: "systems/pf2e/icons/equipment/shields/tower-shield.webp",
            // },
            {
                actionType: "skill_trained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Track`),
                skill: "Survival",
                action: game.pf2e.actions.track,
                icon: "systems/pf2e/icons/conditions/observed.webp",
            },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.TreatDisease`),
            //     skill: "Medicine",
            //     action: game.pf2e.actions.treatDisease,
            //     icon: "icons/magic/nature/root-vine-caduceus-healing.webp",
            // },
            // {
            //     actionType: "skill_trained",
            //     name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.TreatPoison`),
            //     skill: "Medicine",
            //     action: game.pf2e.actions.treatPoison,
            //     icon: "systems/pf2e/icons/effects/treat-poison.webp",
            // },
            {
                actionType: "skill_trained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.TreatWounds`),
                skill: "Medicine",
                // action: [
                //     "XDY DO_NOT_IMPORT Treat Wounds and Battle Medicine",
                //     "xdy-pf2e-workbench.asymonous-benefactor-macros-internal",
                // ],
                action: game.pf2e.actions.treatWounds,
                icon: "icons/magic/nature/root-vine-caduceus-healing.webp",
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.Trip`),
                skill: "Athletics",
                action: game.pf2e.actions.trip,
                icon: "icons/skills/wounds/bone-broken-marrow-yellow.webp",
                showMAP: true,
            },
            {
                actionType: "skill_untrained",
                name: game.i18n.localize(`${MODULENAME}.macros.basicActionMacros.actions.TumbleThrough`),
                skill: "Acrobatics",
                action: game.pf2e.actions.tumbleThrough,
                icon: "icons/skills/movement/feet-winged-sandals-tan.webp",
            },
        ];
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            // classes: ["dnd5e"],
            id: 'extra-tales-ez-ui',
            classes:["pf2e-extraordinary-tales", "ez-ui-dense"],
            title: "Ez UI",
            template: "modules/pf2e-extraordinary-tales/templates/apps/ez-ui.hbs",
            width: "auto",
            height: "auto",
            popOut: false,
            scrollY: ["ez-ui-scrolling"]
        });
    }

    async close(options={}) {
        if (this._overrideClose) {
            return super.close(options)
        }
        else {
            this.options.popOut = false;
            this._overrideClose = true;
            await this.close()
            await this.render(true);
            this._overrideClose = false;

        }
            // super.close(options);
            // await this.render(true);

        
    }

    async getData() {
        const data = {}

        data.isGM = game.user.isGM;

        data.collapsed = this._collapsed;
        data.username = game.user.name;
        if (this._collapsed) {
            data.right = 0;
        } else {
            data.right = 300;
        }
        data.combat = false;
        if (game.combat) {
            if (game.combat.active) {
                data.combat = game.combat;
            }
        }

        data.fixed = true;

        data.popOut = this.popOut;
        data.position = this.position;

        data.actors = [];

        data.characters = [];

        data.config = game.user.getFlag("pf2e-extraordinary-tales", "config") ?? {};


        if (canvas.tokens.controlled.length) {
            for(let t of canvas.tokens.controlled) {
                // data.actors.push(this._collectRolls(t.actor))
                data.actors.push(t.actor);
            }

        }
        else {

            if (game.user.character) {
                // something
                data.actors.push(game.user.character);
                // data.actors.push(this._collectRolls(game.user.character))
            }
        }

        for(let u of game.users.values()) {
            if (u.character) {
                data.characters.push(u.character);
            }
        }

        if (game.user.character) {
            data.characters = data.characters.filter(c => c.id != game.user.character.id)
            data.characters.unshift(game.user.character);
        }


        data.actor = data.actors[0] ?? false;
        data.spells = false;
        if (data.actor) {
            data.spells = await Promise.all(data.actor.spellcasting.map(async(entry) => {
                if (entry.toObject) {
                    let data = entry.toObject(false);
                    let spellData =  await entry.getSpellData();
                    return mergeObject(data, spellData)
                }
            }))
        }

        // data.macros = await game.packs.get("pf2e.action-macros").getDocuments();
        data.macros = [];
        
        let pack = game.packs.get('pf2e.actionspf2e');
        await pack.getDocuments();
        let activities = pack.filter(i => i.system.traits.value.includes('exploration') && i.system.publication.title == "Pathfinder Core Rulebook")
        data.activities = activities;

        data.activities = [];


        data.actions = this._actions;

        return data;
    }

  

    activateListeners(html) {
        let self = this;

        const checkTarget = (callback) => {
            if (!game.user.targets.toObject().length) {
                new Dialog({
                    title: `No Targets`,
                    content: `<div style="text-align:center;font-size:200%">No tokens targeted.</div><div>Target at least one token, or continue without targets.</div>`,
                    render: html => {
                    },
                    buttons: {
                        button1: {
                            label: "Continue",
                            callback: () => {
                                callback();
                            },
                            icon: `<i class="fas fa-check"></i>`
                            },
                        button2: {
                            label: "Cancel",
                            callback: () => { },
                            icon: `<i class="fas fa-times"></i>`
                        }
                    }
                }).render(true);
            }
            else {
                callback();
            }
        }

        html.on("click", "[data-combatant]", (ev) => {
            let combatant = game.combat.combatants.get(ev.currentTarget.dataset.combatant);
            let token = combatant.token?.object;
            if (token?.isOwner) {
            }
            if (token?.isVisible) {
                canvas.animatePan({
                    x: token.x,
                    y: token.y,
                    scale: canvas.stage.scale.x,
                    duration: 500
                });
            }
        });
        html.find("[data-combatant]").hover((ev) => {
            if ( !canvas.ready ) return;
            let combatant = game.combat.combatants.get(ev.currentTarget.dataset.combatant);
            let token = combatant.token?.object;
            if (token?.isVisible) {
                if ( !token.controlled) token._onHoverIn(ev);
                this._hoverToken = token;
            }
        }, (ev) => {
            if (this._hoverToken) this._hoverToken._onHoverOut(ev);
            this._hoverToken = null;
        })


        html.find("[data-tip]").tooltipster({
            functionBefore: function(instance, helper) {
                instance.content(helper.origin.dataset.tip)
            },
            contentAsHTML: true,
            animationDuration:50,
            delay: 200,
            interactive:true,
            position: "left",
            distance: 0,
            arrow: false,
            updateAnimation:null
        })
        
        html.find('[data-spell]').tooltipster({
            functionBefore: async (instance, helper) => {
                instance.content("Loading...");
                let spell = helper.origin.dataset.spell;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)

                let lvltext = `Level ${helper.origin.dataset.slotLevel}`
                if (helper.origin.dataset.slotLevel == 0) {
                    lvltext = 'Cantrip'
                }

                let obj = a.items.get(spell);
                let msg = await obj.toMessage(undefined, { create: false })
                let content = "";

                content += `<div style="display:flex;gap:2px" class="hover-gold">`

                content += `<div data-cast style="padding:0.5em;background:#fff2;flex:1;text-transform:uppercase;text-align:center">Cast Spell (${lvltext})</div>`
                content += ` <div data-counter style="padding:0.5em;background:#fff2;flex:1;text-transform:uppercase;text-align:center">Counteract</div>`
                content += ` <div data-chat style="padding:0.5em;background:#fff2;flex:1;text-transform:uppercase;text-align:center">Send to Chat</div>`
                content += `</div>`

                content += await TextEditor.enrichHTML(msg.content, {async: true})

                instance.obj = obj;
                instance.content(content)
            },
            functionReady: async(instance, helper) => {
                $(helper.tooltip).on('click', '[data-cast]', (ev) => {
                    instance.obj.spellcasting.cast(instance.obj, {slot: helper.origin.dataset.slotId, level: helper.origin.dataset.slotLevel});
                });
                $(helper.tooltip).on('click', '[data-chat]', async (ev) => {
                    await instance.obj.toMessage(undefined)
                });
                $(helper.tooltip).on('click', '[data-counter]', async (ev) => {
                    instance.obj.rollCounteract(ev);
                    // await instance.obj.toMessage(undefined)
                });
            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null
        });

        html.find('[data-item]').tooltipster({
            functionBefore: async (instance, helper) => {
                instance.content("Loading...")
                let item = helper.origin.dataset.item;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)
                let obj = a.items.get(item);
                let msg = await obj.toMessage(undefined, { create: false })
                // REALLY WEIRD WORK AROUND BECAUSE OF PF2E SYSTEM BUG
                // WITH @CHECK NOT RESOLVING 
                let msgcontent = await TextEditor.enrichHTML(msg.content, {async: true});

                let $content = $(msgcontent);
                let content = await TextEditor.enrichHTML(obj.description, { rollData: obj.getRollData(), async:true });
                $content.find('.card-content').html(content);
                content = $content[0].outerHTML;
                content = `<div style="display:flex" class="hover-gold"><div data-chat style="padding:0.5em;background:#fff2;flex:1;text-transform:uppercase;text-align:center">Send to Chat</div></div>` + content;
                instance.obj = obj;
                instance.content(content)
            },
            functionReady: async(instance, helper) => {
                $(helper.tooltip).on('click', '[data-chat]', async (ev) => {
                    await instance.obj.toMessage(undefined)
                });
            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null

        });

        html.find('[data-key]').tooltipster({
            functionBefore: async (instance, helper) => {
                let key = helper.origin.dataset.key;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)
                let obj = foundry.utils.getProperty(a, key);
                let content = '';
                instance.content("Loading...")
                if (obj.check) {
                content = `<div style="font-size:125%">${obj.check.label} <strong>${obj.check.mod}</strong></div><div>${obj.check.breakdown}</div><div style="padding-top:1em;font-size:125%">DC <strong>${obj.dc.value}</strong></div><div>${obj.dc.breakdown}</div>`
                }
                else if (obj.name == "perception") {
                    content = `<div style="font-size:125%">Perception Check <strong>${obj.value}</strong></div><div>${obj.breakdown}</div><div style="padding-top:1em;font-size:125%">DC <strong>${obj.value + 10}</strong></div><div>${obj.breakdown}</div>`
                }
                else {
                    content = `<div style="font-size:125%">${obj.label} <strong>${obj.totalModifier}</strong></div>`
                }
                instance.content(content)
            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null
        });

        html.find('[data-casting]').tooltipster({
            functionBefore: async (instance, helper) => {
                let casting = helper.origin.dataset.casting;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)
                instance.content("Loading...")
                let obj = a.spellcasting.get(casting);
                let content = ""

                content += `<div>${obj.name}</div>`

                console.log(obj);

                content += `<div style="display:flex">`
                content += ` <div data-attack style="padding:1em;background:#fff2;flex:1;text-transform:uppercase"><span class="hover-gold">Spell Attack +${obj.statistic.check.mod}</span></div>`
                content += ` <div data-attack-two style="padding:1em;background:#fff2;flex:1;text-transform:uppercase"><span class="hover-gold">MAP -5</span></div>`
                content += ` <div data-attack-three style="padding:1em;background:#fff2;flex:1;text-transform:uppercase"><span class="hover-gold">MAP -10</span></div>`
                content += `</div>`

                content += `<div>${obj.statistic.check.label} ${obj.statistic.check.mod}</div>`
                content += `<div>Counteract Check ${obj.statistic.check.mod}</div>`
                content += `<div>Spell DC ${obj.statistic.dc.value}</div>`
                
                instance.obj = obj;
                instance.content(content);
            },
            functionReady: async(instance, helper) => {
                
                $(helper.tooltip).on('click', '[data-attack]', (ev) => {
                    checkTarget(() => {instance.obj.statistic.check.roll()})
                });
                $(helper.tooltip).on('click', '[data-attack-two]', (ev) => {
                
                    checkTarget(() => {instance.obj.statistic.check.roll({ attackNumber: 2})})
           
                });
                $(helper.tooltip).on('click', '[data-attack-three]', (ev) => {
                    checkTarget(() => {instance.obj.statistic.check.roll({ attackNumber: 3})})
                });

            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null
        });

        html.find('[data-act]').tooltipster({
            functionBefore: async (instance, helper) => {
                let act = helper.origin.dataset.act;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)

                instance.content("Loading...")
    
                let obj = a.system.actions[act]
                let dmg =  await obj.damage({getFormula:true});
                let crit =  await obj.critical({getFormula:true});
                let msg = "";
                let item = obj.item;
                if (obj.description)
                    msg = await obj.item.toMessage(undefined, { create: false });
                
                let content = ``;

                let idx = 0;
                content += `<div style="display:flex;gap:2px" class="hover-gold">`
                for(let v of obj.variants) {
                    content += `<div data-act="${idx}" style="flex:1;padding:0.5em;text-align:center;text-transform:uppercase;background:#fff1"> ${v.label} </div>  `
                    idx += 1;
                }
                content += `</div>`

                content += `<div style="padding:0.5em;line-height:1;background:#fff1"><div style="text-transform:uppercase;padding:0.2em 0;"><div style="font-weight:bold">damage</div>${dmg}</div><div style="text-transform:uppercase;padding:0.2em 0"><div style="font-weight:bold">critical</div>${crit}</div></div>`

                content += await TextEditor.enrichHTML(msg.content, {async: true});

                if (obj.weapon) {
                    content += `<div style="text-transform:uppercase">${obj.weapon.type} +${obj.totalModifier}</div>`
                    content += `<div>reach ${obj.weapon.reach}</div>`
                    for(let t of obj.traits) {
                        content += `<div style="font-size:125%">${game.i18n.localize(t.label)}</div>`
                        content += `<div>${game.i18n.localize(t.description)}</div>`
                    }
                }

          

                instance.obj = obj;
                instance.content(content)
            },
            functionReady: async(instance, helper) => {
                $(helper.tooltip).on('click', '[data-act]', (ev) => {
                    let idx = ev.currentTarget.dataset.act;

                    checkTarget(() => instance.obj.variants[idx].roll())
                    
                });
            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null
        });

        html.find('[data-activity]').tooltipster({
            functionBefore: async (instance, helper) => {
                let activity = helper.origin.dataset.activity;
                let actor = helper.origin.dataset.actor;
                let token = helper.origin.dataset.token;
                let t = canvas.scene.tokens.get(token) ?? {};
                let a = t.actor ?? game.actors.get(actor)
                instance.content("Loading...")
                
                let pack = game.packs.get('pf2e.actionspf2e');
                await pack.getDocuments();
                let activities = pack.filter(i => i.system.traits.value.includes('exploration'))
                let obj = activities.find(i => i.id == activity)

                let content = await TextEditor.enrichHTML(obj.system.description.value, {async: true});
                instance.content(content)

            },
            contentAsHTML: true,
            delay: 200,
            interactive:true,
            animationDuration:50,
            distance: 0,
            maxWidth: 400,
            position: "left",
            arrow: false,
            updateAnimation:null
        })


        html.on('click', '[data-pfaction]', async (ev) => {
            let pfaction = ev.currentTarget.dataset.pfaction;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)
            let obj = this._actions[pfaction]
           
            obj.action({
                event: ev,
                actors: [a],
                skill: obj.skill.toLocaleLowerCase(),
                variant: obj.extra,
            });


            // obj.action.execute();

            // obj.sheet.render(true, {focus: true});
        })

        html.on('click', '[data-activity]', async (ev) => {
            let activity = ev.currentTarget.dataset.activity;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)

            let pack = game.packs.get('pf2e.actionspf2e');
            await pack.getDocuments();
            let activities = pack.filter(i => i.system.traits.value.includes('exploration'))
  

            let obj = activities.find(i => i.id == activity)

            obj.sheet.render(true, {focus: true});
        })

        html.on('click', '[data-spell]', (ev) => {
            let spell = ev.currentTarget.dataset.spell;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)

            let obj = a.items.get(spell);

            obj.sheet.render(true, {focus: true});
        })

        html.on('click', '[data-item]', (ev) => {
            let item = ev.currentTarget.dataset.item;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)


            let obj = a.items.get(item);

            obj.sheet.render(true, {focus: true});
        })

        html.on('click', '[data-toggle]', (ev) => {
            let toggle = ev.currentTarget.dataset.toggle;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)
            let obj;

            Object.values(a.synthetics.toggles).some(toggleType => {
                Object.values(toggleType).some(toggleValue => {
                    if (toggleValue.itemId == toggle) {
                        obj=toggleValue;
                        return true;
                    }
                });
            });
            
            a.toggleRollOption(obj.domain, obj.option, obj.itemId, obj.checked ? false : true)

            setTimeout(() => {
                this.render(true);
            }, 250);
        })

        html.on('click', '[data-act]', (ev) => {
            let act = ev.currentTarget.dataset.act;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)
            // let obj = a.system.actions.find(i => i.label == act);
            let obj = a.system.actions[act]
            checkTarget(() => obj.roll());
        });

        html.on('click', '[data-key]', (ev) => {
            let key = ev.currentTarget.dataset.key;
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            
            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)

            console.log(foundry.utils.getProperty(a, key));
            let obj = foundry.utils.getProperty(a, key);
            obj.roll({});
        })

        html.on('click', '[data-action]', async (ev) => {
            let actor = ev.currentTarget.dataset.actor;
            let token = ev.currentTarget.dataset.token;
            let action = ev.currentTarget.dataset.action;

            let t = canvas.scene.tokens.get(token) ?? {};
            let a = t.actor ?? game.actors.get(actor)

            if (action == "extraordinarytales") {
                new ExtraTalesEditor().render(true);
            }

            if (action == "personalxp") {
                if (!(game.user.isGM || actor == (game.user.character?.id ?? false) )) return;

                ExtraTalesCore.promptPersonalXP(a);
            }

            if (action == "collateralxp") {
                if (!(game.user.isGM || actor == (game.user.character?.id ?? false) )) return;

                ExtraTalesCore.promptCollateralXP(a);
            }

            if (action == "flatcheck") {
                new Roll("d20").toMessage({
                    speaker: ChatMessage.getSpeaker({ actor: a, token: t }),
                    flavor: `<strong>d20 Flat Check</strong>`
                });
            }

            if (action == "recallknowledge") {
                ExtraTalesCore.useRecallKnowledge(a);
            }

            if (action == "requestcheck") {
                ExtraTalesCore.useRequestCheck();
            }

            if (action == "createroll") {
                ExtraTalesCore.useCreateRoll();
            }

            if (action == "moreactions") {
                game.PF2eWorkbench.basicActionMacros();
            }

            if (action == "message") {
                if (!game.user.isGM) return;

                let user = game.users.find(i => i.character?.id == actor);

                let content = `<textarea style="min-height:20em" autofocus></textarea>`
                let whisper = "";
                new Dialog({
                    title: `Send Info (${a.name})`,
                    content: content,
                    render: html => {
                        html.on('input', 'textarea', (ev) => {
                            whisper = ev.currentTarget.value;
                        })
                    },
                    buttons: {
                        button1: {
                            label: "Send",
                            callback: () => {
                                ChatMessage.create(
                                    {
                                        flavor: "",
                                        speaker: { alias: `Info (${a.name})` },
                                        flags: {
                                            "core.canPopout": true,
                                        },
                                        user: game.user.id,
                                        type: CONST.CHAT_MESSAGE_TYPES.OTHER,
                                        content: whisper,
                                        whisper: [user.id],
                                    }
                                )
                            },
                            icon: `<i class="fas fa-check"></i>`
                            },
                        button2: {
                            label: "Cancel",
                            callback: () => { },
                            icon: `<i class="fas fa-times"></i>`
                        }
                    }
                }).render(true);
            }

            if (action == "rest") {
                game.pf2e.actions.restForTheNight({ ev, actors: [a] });
            }

            if (action == "popout") {
                this.options.popOut = !this.popOut;
                this._overrideClose = true;
                await this.close();
                await this.render(true);
                this._overrideClose = false;
            }

            if (action == "refocus") {
                await game.PF2eWorkbench.refocus()
            }

            if (action == "hitpoints") {
                if (!(game.user.isGM || actor == (game.user.character?.id ?? false) )) return;

                let content = `<h3>Hit Points</h3><div class="flexrow" style="align-items:center;gap:1em"><div style="text-align:right">Total</div><input data-target="value" type="number"><div style="text-align:right">Modify</div><input data-target="valuemod" type="number"></div><h3>Temporary</h3><div class="flexrow" style="align-items:center;gap:1em"><div style="text-align:right">Total</div><input data-target="temp" type="number"><div style="text-align:right">Modify</div><input data-target="tempmod" type="number"></div><div style="height:4px"></div>`
                let hp = {};
                hp.value = a.attributes.hp.value;
                hp.valuemod = "";
                hp.temp = a.attributes.hp.temp;
                hp.tempmod = "";
h4
                new Dialog({
                    title: "Change Hit Points",
                    content: content,
                    render: html => {
                        html.find('[data-target]').each((i, el) => {
                            el.value = parseInt(hp[el.dataset.target])
                        })

                        html.find('[data-target="valuemod"]').focus();

                        html.on('input', '[data-target]', (ev) => {
                            hp[ev.currentTarget.dataset.target] = parseInt(ev.currentTarget.value ?? 0);
                        })
                    },
                    buttons: {
                        button1: {
                            label: "Save",
                            callback: async () => {
                                await a.update({
                                    'system.attributes.hp.value': hp.value + hp.valuemod,
                                    'system.attributes.hp.temp': hp.temp + hp.tempmod,
                                })
                            },
                            icon: `<i class="fas fa-check"></i>`
                            },
                        button2: {
                            label: "Cancel",
                            callback: () => { },
                            icon: `<i class="fas fa-times"></i>`
                        }
                    }
                }).render(true);
            }

            if (action == "combatturn") {
                const confirmed = await Dialog.prompt({
                    content: "End your turn?"
                });
                if (confirmed) {
                    game.combat.nextTurn();
                }
            }

            if (action == "configure") {
                new ExtraTalesConfigure().render(true);
            }

            if (game.combat) {
                if (action == "combatprev") {
                    if (!game.user.isGM) return;
                    game.combat.previousTurn();
                }

                if (action == "combatnext") {
                    if (!game.user.isGM) return;
                    game.combat.nextTurn();
                }

                if (action == "combatstart") {
                    if (!game.user.isGM) return;
                    game.combat.startCombat();
                }

                if (action == "combatend") {
                    if (!game.user.isGM) return;
                    game.combat.endCombat();
                }

                let esc = parseInt(game.combat.getFlag("pf2e-extraordinary-tales", "escalation") ?? 0)
                if (action == "escup") {
                    if (!game.user.isGM) return;
                    game.combat.setFlag("pf2e-extraordinary-tales", "escalation", esc + 1)

                    ChatMessage.create( {
                        content: `Escalation (${esc}) <i class="fa-solid fa-arrow-right"></i> (${esc + 1})`
                    })
                }

                if (action == "escdown") {
                    if (!game.user.isGM) return;
                    game.combat.setFlag("pf2e-extraordinary-tales", "escalation", esc - 1)

                    ChatMessage.create( {
                        content: `Escalation (${esc}) <i class="fa-solid fa-arrow-right"></i> (${esc - 1})`
                    })
                }

                if (action == "esczero") {
                    if (!game.user.isGM) return;

                    game.combat.setFlag("pf2e-extraordinary-tales", "escalation", 0)
                }
            }

            if (action == "exploration") {
                if (!(game.user.isGM || actor == (game.user.character?.id ?? false) )) return;

                let content = `<div><input type="text" placeholder="Exploration Status"></div>`
                content += `<div style="text-align:center;padding:0.25em;cursor:pointer" data-clear><i class="fa-solid fa-times"></i> Clear</div>`
                let pack = game.packs.get('pf2e.actionspf2e');
                await pack.getDocuments();
                let activities = pack.filter(i => i.system.traits.value.includes('exploration') && i.system.publication.title == "Pathfinder Core Rulebook")
                content += ``
                for(let i of activities) {
                    content += `<div style="display:inline-block;width:50%;cursor:pointer"><span data-add="${i.id}"> &bull; ${i.name}</span> <i data-item="${i.id}" class="fa-solid fa-circle-info " style="opacity:0.5"></i></div>`
                }

                let status = a.getFlag('pf2e-extraordinary-tales', 'exploration-status') ?? "";

                new Dialog({
                    title: "Set Exploration Status",
                    content: content,
                    render: html => {
                        html.find('input').focus();
                        html.find('input').val(status);
                        html.on('input', 'input', (ev) => {
                            status = ev.currentTarget.value
                        })

                        html.on('click', '[data-item]', (ev) => {
                            let item = ev.currentTarget.dataset.item;
                            activities.find(i => i.id == item).sheet.render(true);
                        })

                        html.on('click', '[data-clear]', (ev) => {
                            status = "";
                            html.find('input').val("")
                        })

                        html.on('click', '[data-add]', (ev) => {
                            let item = ev.currentTarget.dataset.add;
                            let obj =  activities.find(i => i.id == item);
                            let s = html.find('input').val();
                            if (s.trim() === "") {
                                s = obj.name;
                            }
                            else {
                                s += ", " + obj.name;
                            }
                            html.find('input').val(s);
                            status = s;
                        })

                        html.find('[data-add]').tooltipster({
                            functionBefore: async (instance, helper) => {
                                instance.content("Loading...")
                                let item = helper.origin.dataset.add;
                                let obj = activities.find(i => i.id == item )
                                // let msg = await obj.toMessage(null, { create: false })
                                // let content = TextEditor.enrichHTML(msg.content);
                                let content = await TextEditor.enrichHTML(obj.system.description.value, {async: true});
                                instance.content(content)
                            },
                            contentAsHTML: true,
                            delay: 500,
                            // interactive:true,
                            animationDuration:50,
                            distance: 0,
                            maxWidth: 400,
                            position: "top",
                            arrow: false,
                            updateAnimation:null
                
                        });
                    },
                    buttons: {
                        button1: {
                            label: "Save",
                            callback: () => {
                                a.setFlag('pf2e-extraordinary-tales', 'exploration-status', status)
                            },
                            icon: `<i class="fas fa-check"></i>`
                        },
                        button2: {
                            label: "Cancel",
                            callback: () => {

                            },
                            icon: `<i class="fas fa-times"></i>`
                        }
                    }
                }).render(true);
            }
        })
    }

}
