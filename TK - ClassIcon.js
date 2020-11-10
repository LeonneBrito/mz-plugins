//=============================================================================
// TK - ClassIcon.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Add icons for the hero classes.
 * @author Takkun
 * @url https://
 *
 * @help
 * ===========================================================================
 * Terms of Use
 * ===========================================================================
 * 
 * 1. For support, feature requests or bug reports, you may contact me through
 *  any of the following channels:
 *  
 *  1.1 Opening an issue on the plugin's GitHub repository:
 *  https://github.com/LeonneBrito/mz-plugins
 * 
 *  1.2 Tagging me on threads on Rpg Maker related Forums, such as:
 *  rpgmakerweb.com (English)
 *  condadobraveheart.com (Portuguese)
 *  centrorpg.com (Portuguese)
 * 
 *  1.3 Contact me via email:
 *  https://mailto:contato'at'leonnebrito.com.br
 * 
 * 2. Do not send me Direct Messages asking for support or bug reports.
 * You may only send me direct messages when none of the above platforms are
 * appropiate for it.
 * 
 * 3. If you want to acquire the license for commercial use of any plugin just 
 * contact me by any of the means already listed above.
 * 
 * 4. This plugin is released under the CC BY-NC-ND 4.0.
 * 
 * 5. I'm not responsible for anything created with this plugin.
 * 
 * ===========================================================================
 * Change Log
 * ===========================================================================
 * 
 * 2020-11-10 - Version 1.00.00
 *
 * ===========================================================================
 * Instructions
 * ===========================================================================
 * 
 * Use in class notes to indicate the icon:
 * <icon:X>
 * Replace X with the icon you want to use.
 * 
 * If not specified it will use the index icon 96.
 * 
 * GREAT DAY!
 * 
*/

//-----------------------------------------------------------------------------
// Alias
//

const tkPlugins_GameActor = Game_Actor.prototype.setup;
const tkPlugins_WinStatusBase_dAC = Window_StatusBase.prototype.drawActorClass;

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

Game_Actor.prototype.setup = function(actorId) {
    tkPlugins_GameActor.call(this, actorId);
    this.classIcon = $dataClasses[this._classId].meta.icon && $dataClasses[this._classId].meta.icon.trim() || 96;
}

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.

Window_StatusBase.prototype.drawActorClass = function(actor, x, y, width) {
    tkPlugins_WinStatusBase_dAC.call(this, actor, x, y, width);
    const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
    this.drawIcon(actor.classIcon, x - 36, iconY);
}
