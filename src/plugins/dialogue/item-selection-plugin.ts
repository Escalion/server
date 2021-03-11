import { widgetActionHandler } from '@engine/world/action/widget-interaction.action';

/**
 * Handles an item selection dialogue choice.
 */
export const action: widgetActionHandler = (details) => {
    const { player, widgetId, childId } = details;
    player.interfaceState.closeWidget(widgetId, childId);
};

export default { type: 'widget_action', widgetIds: [ 303, 304, 305, 306, 307, 309 ], action, cancelActions: false };
